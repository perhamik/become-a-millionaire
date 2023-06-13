'use client'

import {configureStore} from '@reduxjs/toolkit'

import configReducer from './features/config/configSlice'
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		config: configReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
