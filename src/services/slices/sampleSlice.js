import { createSelector, createSlice } from '@reduxjs/toolkit'

// ========== Redux Selectors ========== //
const selectSampleText = createSelector(
  (state) => state.sample,
  (sample) => sample.text
)

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    text: 'sample',
  },
  reducers: {
    updateSample: (state, action) => {
      state.text = action.payload
    },
  },
})

// Extract and export each action creator by name
export const { updateSample } = sampleSlice.actions
// Export selector as named export
export { selectSampleText }
// Export the reducer, either as a default or named export
export default sampleSlice.reducer
