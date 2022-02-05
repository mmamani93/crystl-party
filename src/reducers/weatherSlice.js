import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: {
    storeWeather: (state, action) => {
      state.value = {
        ...state.value,
        temperature: action.payload
      }
    },
    clearWeather: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeWeather, clearWeather } = weatherSlice.actions

export default weatherSlice.reducer