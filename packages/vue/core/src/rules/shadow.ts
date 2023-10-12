import { generateRules, prefix } from '../utils'

export const shadows = {
  [prefix('shadow-1')]:
    '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 2px 5px rgba(0, 0, 0, 0.01)',
  [prefix('shadow-2')]:
    '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 2px 5px rgba(0, 0, 0, 0.01)',
  [prefix('shadow-3')]:
    '0px 1px 2px rgba(0, 0, 0, 0.02), 0px 6px 10px rgba(0, 0, 0, 0.02), 0px 6px 10px rgba(0, 0, 0, 0.02)',
  [prefix('shadow-4')]:
    '0px 1px 6px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.04)',
  [prefix('shadow-5')]:
    '0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.1)',
  [prefix('shadow-5s')]:
    '0px 0px 0px 0.25px rgba(155, 155, 155, 1), 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.1)',
  [prefix('shadow-6')]:
    '0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.1)',
}

export const rules = generateRules('box-shadow', shadows)

console.log(rules)
export default rules
