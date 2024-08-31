import { animations, config, shorthands } from '@tamagui/config/v3'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'

const poppinsFace = {
  normal: { normal: 'Poppins400', italic: 'Poppins400Italic' },
  300: { normal: 'Poppins300', italic: 'Poppins300Italic' },
  500: { normal: 'Poppins500', italic: 'Poppins500Italic' },
  600: { normal: 'Poppins600', italic: 'Poppins600Italic' },
  700: { normal: 'Poppins700', italic: 'Poppins700Italic' },
  800: { normal: 'Poppins800', italic: 'Poppins800Italic' },
  900: { normal: 'Poppins900', italic: 'Poppins900Italic' },
}

const headingFont = createFont({
  size: config.fonts.heading.size,
  lineHeight: config.fonts.heading.lineHeight,
  weight: config.fonts.heading.weight,
  letterSpacing: config.fonts.heading.letterSpacing,
  face: poppinsFace,
})

const bodyFont = createFont({
  size: config.fonts.body.size,
  lineHeight: config.fonts.body.lineHeight,
  weight: config.fonts.body.weight,
  letterSpacing: config.fonts.body.letterSpacing,
  face: poppinsFace,
})

export const appConfig = createTamagui({
  animations,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
})

// Default config
// export const appConfig = createTamagui(config)

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
