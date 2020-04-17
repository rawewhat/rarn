import { createSelector } from '@reduxjs/toolkit'

export const sampleSelector = createSelector(
  (state) => state.sample,
  (sample) => sample.sample
)
