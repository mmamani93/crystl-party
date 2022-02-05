import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import partyFormReducer from './reducers/partyFormSlice'
import weatherReducer from './reducers/weatherSlice'
import beerReducer from './reducers/beerSlice'



const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    partyForm: partyFormReducer,
    weather: weatherReducer,
    beer: beerReducer,
  },
  middleware: customizedMiddleware,
})