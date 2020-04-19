/*
  ========== Style Module ==========
  use this to add custom reusable styles
 */
import { black, white } from './color'

export const darkShadow = {
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
}

export const lightShadow = {
  shadowColor: white,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
}

// works on iOS only
export function colorShadow(color = black) {
  return {
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
}
