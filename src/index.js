import { Navigation } from 'react-native-navigation'

import { ROOT_SCREEN } from './resources/configs'
import { screens } from './screens'
import {
  // navigationHelpers
  registerComponents,
  setRoot,
} from './services/helpers'

registerComponents(screens)

Navigation.events().registerAppLaunchedListener(async () => {
  await setRoot(ROOT_SCREEN)
})
