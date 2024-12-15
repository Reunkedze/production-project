type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
}

classNames('remove-btn', {hovered: true, selecable: true, red: false}, ['pdg'])

'remove-btn hovered selectable pdg'
