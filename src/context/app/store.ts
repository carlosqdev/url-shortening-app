import { configureStore } from '@reduxjs/toolkit'

import linkReducer from '../features/linkSlice'

export const store = configureStore({
	reducer: {
		links: linkReducer
	}
})

// Infer the `RootState` and `AddDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {reducers}
export type AddDispatch = typeof store.dispatch