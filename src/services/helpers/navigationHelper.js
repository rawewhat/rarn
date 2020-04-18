import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import store from 'src/services/store'

export async function navigate(componentId, screenName, options) {
  const layout = {
    component: {
      id: screenName,
      name: `screen.${screenName}`,
    },
  }
  layout.component.options = { ...layout.component.options, ...options }
  console.log('layout', layout)
  return await Navigation.push(componentId, layout)
}

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

export async function setRoot(screenName, options) {
  const layout = {
    root: {
      stack: {
        children: [
          {
            component: {
              id: screenName,
              name: `screen.${screenName}`,
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  }
  layout.root.stack.options = { ...layout.root.stack.options, ...options }
  console.log('layout', layout)
  return await Navigation.setRoot(layout)
}
