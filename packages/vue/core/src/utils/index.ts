import { CSSObject, Rule } from 'unocss'
import { kCommonPrefix } from '../constant'

export const prefix = (...s: string[]) => kCommonPrefix + '-' + s.join('-')

export const generateRules = (
  key: string,
  s: Record<string, string | number>
) => {
  const r: Rule[] = []
  Object.keys(s).forEach((k) => {
    r.push([k, { [key]: s[k] }])
  })

  return r
}
