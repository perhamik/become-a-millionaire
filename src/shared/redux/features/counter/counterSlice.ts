'use client'

import {createSlice} from '@reduxjs/toolkit'

import {
	_increment,
	_reset,
	_setFinalPage,
	_setGamePage,
	_setInitPage,
} from './reducers'

export interface CounterState {
	value: number
	page: number
}

const initialState: CounterState = {
	page: 0,
	value: 0,
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
