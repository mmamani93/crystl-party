import { createSlice } from '@reduxjs/toolkit'

export const partyFormSlice = createSlice({
  name: 'partyForm',
  initialState: {},
  reducers: {
    saveFormData: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload
      }
    },
    clearFormData: (state) => {
      state.value = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveFormData, clearFormData } = partyFormSlice.actions

export default partyFormSlice.reducer