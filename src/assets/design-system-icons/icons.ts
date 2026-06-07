const iconModules = import.meta.glob('./*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const designSystemIcons = Object.fromEntries(
  Object.entries(iconModules).map(([filePath, svg]) => [
    filePath.replace('./', '').replace('.svg', ''),
    svg,
  ]),
) as Record<string, string>

export type DesignSystemIconName = keyof typeof designSystemIcons
