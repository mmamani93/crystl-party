import { createSlice } from '@reduxjs/toolkit'

export const beerSlice = createSlice({
  name: 'beer',
  initialState: {},
  reducers: {
    storeBeers: (state, action) => {
      state.value = {
        ...state.value,
        beers: action.payload
      }
    },
    clearBeers: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeBeers, clearBeers } = beerSlice.actions

export default beerSlice.reducer