'use client'

import {createSlice} from '@reduxjs/toolkit'
import type {CaseReducer} from '@reduxjs/toolkit'

export interface CounterState {
	value: number
	page: number
}

const initialState: CounterState = {
	page: 0,
	value: 0,
}

const _increment: CaseReducer<CounterState> = (state) => {
	state.value += 1
}

const _reset: CaseReducer<CounterState> = (state) => {
	state.value = 0
}

const _setInitPage: CaseReducer<CounterState> = (state) => {
	state.page = 0
}

const _setGamePage: CaseReducer<CounterState> = (state) => {
	state.page = 1
}

const _setFinalPage: CaseReducer<CounterState> = (state) => {
	state.page = 2
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: _increment,
		reset: _reset,
		setInitPage: _setInitPage,
		setGamePage: _setGamePage,
		setFinalPage: _setFinalPage,
	},
})

export const {increment, reset, setInitPage, setGamePage, setFinalPage} =
	counterSlice.actions
export default counterSlice.reducer
