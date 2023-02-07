import { createSlice } from '@reduxjs/toolkit'

export interface Link {
	code: string
	original_link: string
	full_short_link: string
}

interface Links {
	value: Link[]
}

const initialState: Links = {
	value: []
}

export const linkSlice = createSlice({
	name:'links',
	initialState,
	reducers: {
		setLinks: (state, values) => {
			state.value = values.payload
		}
	}
})

export const { setLinks } = linkSlice.actions

export default linkSlice.reducer