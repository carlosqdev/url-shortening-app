import { createSlice } from '@reduxjs/toolkit'

export interface Link {
  code: string
  original_link: string
  full_short_link: string
}

interface Links {
  value: Link[]
  isCreating: boolean
  error: string
}

const initialState: Links = {
  value: [],
  isCreating: false,
  error: ''
}

export const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, values) => {
      state.value = values.payload
    },
    setIsGetting: (state, value) => {
      state.isCreating = value.payload
    },
    setError: (state, value) => {
      state.error = value.payload
    }
  }
})

export const { setLinks, setIsGetting, setError } = linkSlice.actions

export default linkSlice.reducer
