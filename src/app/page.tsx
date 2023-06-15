'use client'

import useWindowSize from '@/src/shared/hooks/useWindowSize'
import {RootState, useAppSelector} from '@/src/shared/redux'
import {setVH} from '@/src/shared/utils'
import {FinalScreen} from '@/src/widgets/FinalScreen'
import {InitialScreen} from '@/src/widgets/InitialScreen'
import {QuestionScreen} from '@/src/widgets/QuestionScreen'

export default function Home() {
	const page = useAppSelector((state: RootState) => state.counter.page)

	useWindowSize(() => {
		setVH()
	})

	switch (page) {
		case 1:
			return <QuestionScreen />
		case 2:
			return <FinalScreen />
		default:
			return <InitialScreen />
	}
}
