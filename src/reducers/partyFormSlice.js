import { createSlice } from '@reduxjs/toolkit'

export const partyFormSlice = createSlice({
  name: 'partyForm',
  initialState: {
    formData: {},
    beers: {},
    temperature: {}
  },
  reducers: {
    saveFormData: (state, action) => {
      console.log(state.value)
      console.log(action.payload)
      state.value = {
        ...state.value,
        formData: action.payload
      }
      console.log(state.value)
    },
    storeBeers: (state, action) => {
      state.value = {
        ...state.value,
        beers: action.payload
      }
    },
    storeWeather: (state, action) => {
      state.value = {
        ...state.value,
        temperature: action.payload
      }
    },
    clearFormData: (state) => {
      state.value = {}
    },
  },
})

export const { saveFormData, storeBeers, storeWeather, clearFormData } = partyFormSlice.actions

export default partyFormSlice.reducer
