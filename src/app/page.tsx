'use client'

import {InitialScreen} from '@/src/widgets/InitialScreen'

import {RootState, useAppSelector} from '../shared/redux'
import {FinalScreen} from '../widgets/FinalScreen'
import {QuestionScreen} from '../widgets/QuestionScreen'

export default function Home() {
	const page = useAppSelector((state: RootState) => state.counter.page)

	switch (page) {
		case 1:
			return <QuestionScreen />
		case 2:
			return <FinalScreen />
		default:
			return <InitialScreen />
	}
}
