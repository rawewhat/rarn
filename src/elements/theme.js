/*
  ========== Theme Module ==========
  use this to add custom theme
 */
import { black } from './color'

// use for default component size
export const SIZE = {
  BUTTON: 40, // button height
  CARD: 100, // card height
  CORNER: 5, // corner radius
  FULL: '100%',
  ICON: 24, // icon width and height
}

// use for padding and margin
export const SPACING = {
  TINY: 2,
  SMALL: 5,
  NORMAL: 10,
  BIG: 20,
  HUGE: 30,
  ENORMOUS: 40,
}

export const defaultTheme = {
  color: {
    primary: '#000', // brand primary color
    secondary: '#000', // brand secondary color
    accent: '#000', // visual popping color
    background: '#000', // default background color
    text: black,
  },
}

export default defaultTheme
