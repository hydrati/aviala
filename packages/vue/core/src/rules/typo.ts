import { prefix } from '../utils'

const _generateTypo = (s: number, w: number, ls: number, lh: number) => ({
  fontSize: `${s}px`,
  fontWeight: w,
  letterSpacing: `${ls}px`,
  lineHeight: `${lh}px`,
})

export const typo = {
  [prefix('typo', 'h1')]: _generateTypo(48, 700, 0.64, 62),
  [prefix('typo', 'h2')]: _generateTypo(30, 700, 0.64, 40),
  [prefix('typo', 'h3')]: _generateTypo(26, 600, 0.58, 34),
  [prefix('typo', 'h4')]: _generateTypo(22, 500, 0.54, 26),
  [prefix('typo', 'h5')]: _generateTypo(18, 600, 0.32, 24),
  [prefix('typo', 'p')]: _generateTypo(16, 400, 0.26, 22),
  [prefix('typo', 'caption')]: _generateTypo(14, 400, 0.22, 20),
}

export const rules = Object.entries(typo)
