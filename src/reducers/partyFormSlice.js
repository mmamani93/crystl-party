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
      state.value = {
        ...state.value,
        formData: action.payload
      }
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
    }
  }
})

export const { saveFormData, storeBeers, storeWeather, clearFormData } = partyFormSlice.actions

export default partyFormSlice.reducer
