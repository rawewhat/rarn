/*
  ========== Reducer Module ==========
  use this to export reducers created from createSlice.
 */
import authSlice from './authSlice'
import sampleSlice from './sampleSlice'

export default {
  auth: authSlice,
  sample: sampleSlice,
}
