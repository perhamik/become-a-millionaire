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

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: _increment,
	},
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer
