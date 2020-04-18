import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { fakeLogin } from 'src/services/utils'

// ========== Redux Selectors ========== //
const selectAuthToken = createSelector(
  (state) => state.auth,
  (auth) => ({ loading: auth.loading, token: auth.token })
)

// ========== Redux Thunks ========== //
const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().auth
    console.log('loginUser', loading, currentRequestId, requestId)
    if (loading !== 'pending' || currentRequestId !== requestId) return
    const response = await fakeLogin(userId)
    console.log('response', response)
    return response
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentRequestId: undefined,
    error: null,
    loading: 'idle',
    token: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.currentRequestId = undefined
        state.loading = 'idle'
        state.token = action.payload.token
      }
    },
    [loginUser.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [loginUser.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.error = action.error
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    },
  },
})

export { loginUser, selectAuthToken }
export default authSlice.reducer
