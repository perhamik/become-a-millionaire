'use client'

import {useDispatch, useSelector} from 'react-redux'

import type {RootState} from '@/src/process/redux'
import {increment} from '@/src/process/redux'

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
