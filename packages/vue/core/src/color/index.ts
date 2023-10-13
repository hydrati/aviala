import { kColorPrefix } from '../constant'

export type Rgb = string

export type Series = {
  50: Rgb
  100: Rgb
  150: Rgb
  200: Rgb
  250: Rgb
  300: Rgb
  350: Rgb
  400: Rgb
  450: Rgb
  500: Rgb
}

export type Color = Rgb | Series

export type ColorList = Record<string, Color>

export const defaultColors: ColorList = {
  inherit: 'inherit',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  orange: {
    50: '#FFFCE8',
    100: '#FEF4C1',
    150: '#FDE99B',
    200: '#FCDD75',
    250: '#FBCD4F',
    300: '#FABC2A',
    350: '#CF921A',
    400: '#A36C0E',
    450: '#784A05',
    500: '#4D2B00',
  },
}

export function generatePreflights(theme = defaultColors): string {
  let r = ''

  const generateCSS = (o: any, prefix = kColorPrefix) => {
    if (typeof o == 'object') {
      Object.keys(o).forEach((k) => {
        if (typeof o[k] == 'string') {
          r += `\n--${prefix}-${k}:${o[k]};`
        } else if (typeof o[k] == 'object') {
          generateCSS(o[k], `${prefix}-${k}`)
        }
      })
    }
  }

  generateCSS(theme)
  return r
}
