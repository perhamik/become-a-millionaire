'use client'

import {useDispatch, useSelector} from 'react-redux'

import type {RootState} from '@/src/shared/redux'
import {increment} from '@/src/shared/redux'

export default function TestPage() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()
	return (
		<div>
			<span>{`Count: ${count}`}</span>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	)
}
