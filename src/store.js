import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import partyFormReducer from './reducers/partyFormSlice'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    partyForm: partyFormReducer
  },
  middleware: customizedMiddleware
})
