'use client'

import {createSlice} from '@reduxjs/toolkit'
import type {CaseReducer} from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

const _increment: CaseReducer<CounterState> = (state) => {
	state.value += 1
}

const _reset: CaseReducer<CounterState> = (state) => {
	state.value = 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: _increment,
		reset: _reset,
	},
})

export const {increment, reset} = counterSlice.actions
export default counterSlice.reducer
