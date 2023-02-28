import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

export default configureStore({
   reducer: {
      auth: authReducer,
   },
})

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
