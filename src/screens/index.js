/*
  ========== Screen Module ==========
  use this to import and export screen components.
 */
import { SCREEN } from 'src/resources'
import MainScreen from './Main'
import SampleScreen from './Sample'

export const screens = {
  [SCREEN.MAIN]: MainScreen,
  [SCREEN.SAMPLE]: SampleScreen,
}
