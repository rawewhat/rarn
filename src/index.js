import { Navigation } from 'react-native-navigation'

import { ROOT } from './resources'
import { screens } from './screens'
import { registerComponents } from './services'

registerComponents(screens)

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      component: {
        name: `screen.${ROOT}`,
      },
    },
  })
})
