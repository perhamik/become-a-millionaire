import {CaseReducer} from '@reduxjs/toolkit'

import {CounterState} from './counterSlice'

export const _increment: CaseReducer<CounterState> = (state) => {
	state.value += 1
}

export const _reset: CaseReducer<CounterState> = (state) => {
	state.value = 0
}

export const _setInitPage: CaseReducer<CounterState> = (state) => {
	state.page = 0
}

export const _setGamePage: CaseReducer<CounterState> = (state) => {
	state.page = 1
}

export const _setFinalPage: CaseReducer<CounterState> = (state) => {
	state.page = 2
}
