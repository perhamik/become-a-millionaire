'use client'

export {Providers} from './provider'
export type {RootState} from './store'
export type {
	TConfig,
	Earning,
	Question,
	Questions,
} from './features/config/configSlice'

export {store} from './store'

export {
	counterSlice,
	increment,
	reset,
	setInitPage,
	setGamePage,
	setFinalPage,
} from './features/counter/counterSlice'

export {configSlice, fetchConfig} from './features/config/configSlice'

export {getConfig, useAppDispatch, useAppSelector} from './globals'
export {incomeSelect} from './selectors'
