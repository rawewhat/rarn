/*
  ========== Reducer Module ==========
  use this to write redux action and reducer with createSlice.
 */
import sampleReducer, { sampleSlice } from './sampleReducer'

export { sampleSlice }
export default {
  sample: sampleReducer,
}
