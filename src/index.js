import { Navigation } from 'react-native-navigation'

import { ROOT_SCREEN } from './resources/configs'
import { screens } from './screens'
import {
  registerComponents,
  setRoot,
} from './services/helpers/navigationHelper'

registerComponents(screens)

Navigation.events().registerAppLaunchedListener(async () => {
  await setRoot(ROOT_SCREEN)
})
