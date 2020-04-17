import { createSlice } from '@reduxjs/toolkit'

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    sample: 'sample',
  },
  reducers: {
    sampleAction: (state, action) => {
      state.sample = action.payload
    },
  },
})

export default sampleSlice.reducer
