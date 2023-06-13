'use client'

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {fetchConfig} from './features/config/configSlice'
import {AppDispatch, RootState, store} from './store'

export {Providers} from './provider'
export type {RootState} from './store'
export {store}

export {
	counterSlice,
	increment,
	reset,
	setInitPage,
	setGamePage,
	setFinalPage,
} from './features/counter/counterSlice'
export {configSlice, fetchConfig} from './features/config/configSlice'
export type {TConfig} from './features/config/configSlice'

export const getConfig = () => store.dispatch(fetchConfig())

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
