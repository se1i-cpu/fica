import fs from 'fs'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const EXPORT_DIR = path.join(ROOT, 'src', 'assets', 'exported')
const URL_RE = /http:\/\/localhost:3845\/assets\/([a-f0-9]+\.(?:png|svg))/g
const CONST_RE =
  /const\s+(\w+)\s*=\s*(?:\n\s*)?['"]http:\/\/localhost:3845\/assets\/([a-f0-9]+\.(?:png|svg))['"]/g

fs.mkdirSync(EXPORT_DIR, { recursive: true })

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!['node_modules', 'dist', 'exported', 'design-system-icons'].includes(entry.name)) {
        walk(full, out)
      }
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      out.push(full)
    }
  }
  return out
}

function download(filename) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(EXPORT_DIR, filename)
    if (fs.existsSync(outPath)) {
      resolve(outPath)
      return
    }

    http
      .get(`http://localhost:3845/assets/${filename}`, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed ${filename}: ${res.statusCode}`))
          return
        }
        const chunks = []
        res.on('data', (chunk) => chunks.push(chunk))
        res.on('end', () => {
          fs.writeFileSync(outPath, Buffer.concat(chunks))
          resolve(outPath)
        })
      })
      .on('error', reject)
  })
}

function collectFilenames(content) {
  const names = new Set()
  for (const match of content.matchAll(URL_RE)) {
    names.add(match[1])
  }
  return names
}

function transformFile(content) {
  const imports = new Map()

  for (const match of content.matchAll(CONST_RE)) {
    imports.set(match[2], match[1])
  }

  let generated = 0
  for (const match of content.matchAll(URL_RE)) {
    const filename = match[1]
    if (!imports.has(filename)) {
      generated += 1
      imports.set(filename, `imgAsset${generated}`)
    }
  }

  let body = content.replace(
    /const\s+\w+\s*=\s*(?:\n\s*)?['"]http:\/\/localhost:3845\/assets\/[^'"]+['"]\n?/g,
    '',
  )

  for (const [filename, ident] of imports) {
    const url = `http://localhost:3845/assets/${filename}`
    body = body.replaceAll(`'${url}'`, ident)
    body = body.replaceAll(`"${url}"`, ident)
  }

  const usedImports = [...imports.entries()].filter(([_, ident]) => {
    const usage = new RegExp(`\\b${ident}\\b`, 'g')
    const matches = body.match(usage) ?? []
    return matches.length > 0
  })

  const importLines = usedImports
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([filename, ident]) => `import ${ident} from '../../assets/exported/${filename}'`)

  if (importLines.length === 0) {
    return body.replace(/\n{3,}/g, '\n\n')
  }

  const importBlock = `${importLines.join('\n')}\n`
  const importMatch = body.match(/^(?:import .+\n)+/)

  if (importMatch) {
    body = importMatch[0] + importBlock + body.slice(importMatch[0].length)
  } else {
    body = importBlock + '\n' + body
  }

  return body.replace(/\n{3,}/g, '\n\n')
}

const files = walk(path.join(ROOT, 'src'))
const allFilenames = new Set()

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  for (const name of collectFilenames(content)) {
    allFilenames.add(name)
  }
}

console.log(`Downloading ${allFilenames.size} assets...`)
for (const filename of allFilenames) {
  await download(filename)
  console.log('saved', filename)
}

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8')
  if (!original.includes('http://localhost:3845/assets/')) continue
  const updated = transformFile(original)
  fs.writeFileSync(file, updated)
  console.log('updated', path.relative(ROOT, file))
}

console.log('Done.')
