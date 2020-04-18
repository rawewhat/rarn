/*
  ========== Screen Module ==========
  use this to import and export screen components.
 */
import { SCREEN } from 'src/resources/constants'
import MainScreen from './Main'
import SampleScreen from './Sample'
import TestScreen from './Test'

export const screens = {
  [SCREEN.MAIN]: MainScreen,
  [SCREEN.SAMPLE]: SampleScreen,
  [SCREEN.TEST]: TestScreen,
}
