import { prefix } from '../utils'

export const rounded = {
  [prefix('r', '1')]: '4px',
  [prefix('r', '2')]: '6px',
  [prefix('r', '3')]: '8px',
  [prefix('r', '4')]: '12px',
  [prefix('r', '5')]: '18px',
}

export const padding = {
  [prefix('p', '1')]: '6px',
  [prefix('p', '2')]: '12px',
  [prefix('p', '3')]: '18px',
  [prefix('p', '4')]: '24px',
}

export const margin = {
  [prefix('mx', '1')]: '6px',
  [prefix('mx', '2')]: '8px',
  [prefix('mx', '3')]: '12px',
  [prefix('mx', '4')]: '14px',
  [prefix('my', '1')]: '6px',
  [prefix('my', '2')]: '8px',
  [prefix('my', '3')]: '12px',
  [prefix('my', '4')]: '14px',
}

const marginValue = ['6px', '8px', '12px', '14px']

export function generatePreflights(): string {
  let r = ''

  marginValue.forEach((v, i) => {
    r += `\n--${prefix('margin', 'x', i + 1)}:${v};`
    r += `\n--${prefix('margin', 'y', i + 1)}:${v};`
  })

  return r
}
