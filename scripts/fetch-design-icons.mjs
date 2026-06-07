import fs from 'fs'
import http from 'http'
import path from 'path'

const icons = {
  subtract: 'e207ab11c7ba73cd2feff3b36ec00973f7eefdb7',
  vector: '03557e17e4d3c3a316d6a607691a5be52f85799f',
  vector1: '24d4e6ceab8e7f153c4b53995941e9c639110e08',
  vector2: '13c1c408b307c9285b849670cbc7fe6cf8c33411',
  vector929Stroke: 'ed901777d62d477d28624a6b712348edfe663b25',
  vector3: 'b4fe438b8a5a9d49ff373b6116abbddcc214b2d1',
  vector4: '93318afae492acac2c00cf8b1a87179aac84e8be',
  vector5: 'f630778bad509529474ffd38361ab5d115621265',
  vector6: '7cde1dd8b57edbf32e89d14f46a7d719fe39c6f4',
  union: '9fe47e9e9134fc18cbdf806fcc584fb64be6cf3e',
  subtract1: '66bfda30e32992fedbd27d17f0b16fc5d672a62e',
  vector929Stroke1: '19a2752553c1f0daeb83e1f30ff9bbc0c82e54e2',
  subtract2: '21bb70f97c9c7aaaedf6c98be5afda573f112d7f',
  vector7: '5ee6964a80950ac19ed09a9c65a7a86b088d2928',
  subtract3: '0bc2d8bf70d4271996658b421a5536222896154e',
  subtract4: '75bb403943749364c6eb7387ae1b5373ae9059f2',
  subtract5: 'ebaa2b70b1d3931b2671fc6a6667371cabb7f43e',
  vector8: '8fd7dc518f87c3be7c96b1fea08aae6a4d4ed551',
  vector927Stroke: 'ec84a27c1b6255a094798b767fc5e51f9a3d65bc',
  vector9: '1628eba41bad5629046f77be9ec211b3a7da6900',
  vector10: 'c8398e9b39af6b22b3592eb1a375816bea4291b8',
  vector11: 'a4d9cd8c44e5cbf8add47f300499f27f8739fcf2',
  unionStroke: 'c99a9d6fab0826ded42622cb19cf08a86b31081d',
  vector12: '11160053061daab3e8d723134f482e040ed08196',
  subtract6: 'da94d7dd399d23ba61eda18fa99619b04b596c2f',
  vector929Stroke2: 'f4aede7b4aca104edf49d1446e27429ded2a9d66',
  vector13: '3da283b693b574d662061081660994781fda2a6f',
  vector14: 'ef2a49fc988fbfcf46597bdb96d92be44d1ee0f0',
  union1: '75eca6033c16045a5022a6a8824f8977b09fbb9b',
  vector15: 'ae6e16fc017abd2cec03b7e0c03579f763c59ebb',
  vector16: 'cc6b1b260e91380726f828fc2fceeff3477ef899',
  vector929Stroke3: '16bdfa0a953e4931159576ba940e4ce49a67c146',
  vector929Stroke4: '3b3b9ad1e58755f1a39fc4ba415037a2ac853713',
  vector17: '0c9dfaf45f2a1ce1480183f7fa5c6d9f0ab79b09',
  subtract7: 'e446a7f57273b851d245498e002c220844da161b',
  vector18: '3e2f7c9e755722a7122d561fd0aec9d8374a73b4',
  vector19: '8022fbe44987448e3f2bf66055f6fb07f7d75090',
  vector20: '77df9ec28219e384cafd14622d36d2c160047602',
  vector21: '2fe336c84708b203c266b017171b835a4c329028',
  rectangle440: '0e4429bf31d742cebc102b02ec0939e0c6fb642c',
  vector22: '4a511fd17b1ed0ab6b6eb0bfc7479ad49fd28619',
  vector23: '0d20d7870aff814a4831e78dd78c6f4e409686f3',
  vector24: '7ae0eb08149985a66f7641c97fb807bb8bf5cb13',
  vector25: 'd8bfcfad528fcbba72e7fa2f2eeae24448575b9c',
  subtract8: '34a7db27880c87263a975ae04d3107db2491df98',
  vector26: 'f72fb859f59f50eb5cc91e7aa9a76523973f2dbd',
}

const dir = path.join('src', 'assets', 'design-system-icons')
fs.mkdirSync(dir, { recursive: true })

function processSvg(raw) {
  return raw
    .replace(/fill="var\(--fill-0, [^"]+\)"/g, 'fill="currentColor"')
    .replace(/stroke="var\(--stroke-0, [^"]+\)"/g, 'stroke="currentColor"')
    .replace(/fill="var\(--stroke-0, [^"]+\)"/g, 'fill="currentColor"')
    .replace(/fill="#(?!none)[^"]+"/g, 'fill="currentColor"')
    .replace(/stroke="#(?!none)[^"]+"/g, 'stroke="currentColor"')
    .replace(/<svg([^>]*)>/, '<svg$1 class="size-full">')
}

function fetchSvg(hash) {
  return new Promise((resolve, reject) => {
    http
      .get(`http://localhost:3845/assets/${hash}.svg`, (res) => {
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })
        res.on('end', () => resolve(data))
      })
      .on('error', reject)
  })
}

for (const [name, hash] of Object.entries(icons)) {
  const raw = await fetchSvg(hash)
  fs.writeFileSync(path.join(dir, `${name}.svg`), processSvg(raw))
  console.log('saved', name)
}
