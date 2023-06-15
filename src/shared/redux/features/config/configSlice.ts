'use client'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {IQuestion} from '@/src/shared/types'

export type Earning = Array<number>
export type Question = IQuestion & {answered: boolean}
export type Questions = Array<Question>

export type TConfig = {
	earning: Earning
	questions: Questions
}

export type ConfigState = {
	data: TConfig
}

const initialState: ConfigState = {
	data: {
		earning: [],
		questions: [],
	},
}

export const fetchConfig = createAsyncThunk('api/config', async () => {
	const response = await fetch('/api/config')
	const json = await response.json()
	return json as ConfigState
})

export const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchConfig.fulfilled, (state, action) => {
			const {data} = action.payload
			state.data = data
			state.data.questions = data.questions.map((item) => {
				return {
					...item,
					answered: false,
				}
			})
		})
	},
})

export default configSlice.reducer
