import {createSelector} from '@reduxjs/toolkit'

import type {RootState} from './store'

const totalSelector = (state: RootState) => state.counter.value
const earningSelector = (state: RootState) => state.config.data.earning

export const incomeSelect = createSelector(
	totalSelector,
	earningSelector,
	(total, earning) => (total > 0 ? earning.at(total - 1) : 0),
)
