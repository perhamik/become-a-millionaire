import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {fetchConfig} from './features/config/configSlice'
import {AppDispatch, RootState, store} from './store'

export const getConfig = () => store.dispatch(fetchConfig())

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
