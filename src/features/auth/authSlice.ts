import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import authService from './authService'

export interface AuthState {
   user: User
   isLoading: true | false
}

const initialState: AuthState = {
   user: { id: '', username: '', isAdmin: false },
   isLoading: false,
}

type DataType = {
   email: string
   pass: string
}

// Login user
export const login = createAsyncThunk('auth/login', async (userData: LoginType, thunkAPI) => {
   try {
      return await authService.login(userData)
   } catch (error: any) {
      const message =
         (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
   }
})

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      reset: (state) => {
         state.user = { id: '', username: '', isAdmin: false }
         state.isLoading = false
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state) => {
            state.isLoading = true
         })
         .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
         })
         .addCase(login.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
