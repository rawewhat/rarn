/*
  ========== Helper Module ==========
  use this to write functions that need dependency.
 */
import { Navigation } from 'react-native-navigation'

export function registerComponents(args) {
  // Register screens
  Object.entries(args).forEach(([name, component]) => {
    Navigation.registerComponent(`screen.${name}`, () => component)
  })
}
