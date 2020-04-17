import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import store from 'src/services/store'

export function registerComponents(args) {
  // Register screens
  Object.entries(args).forEach(([name, Component]) => {
    Navigation.registerComponent(
      `screen.${name}`,
      () => (props) => (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      ),
      () => Component
    )
  })
}
