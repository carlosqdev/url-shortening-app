import { createSlice } from '@reduxjs/toolkit'

export interface Link {
  code: string
  original_link: string
  full_short_link: string
}

interface Links {
  value: Link[]
  isGetting: boolean
}

const initialState: Links = {
  value: [],
  isGetting: false
}

export const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, values) => {
      state.value = values.payload
    },
    setIsGetting: (state, value) => {
      state.isGetting = value.payload
    }
  }
})

export const { setLinks, setIsGetting } = linkSlice.actions

export default linkSlice.reducer
