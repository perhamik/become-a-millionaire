'use client'

import {useMemo} from 'react'

import {Button, Hand} from '@/src/shared/components'
import {
	RootState,
	reset,
	setGamePage,
	useAppDispatch,
	useAppSelector,
} from '@/src/shared/redux'

import styles from './FinalScreen.module.scss'

export const FinalScreen = () => {
	const dispatch = useAppDispatch()
	const total = useAppSelector((state: RootState) => state.counter.value)
	const earning = useAppSelector(
		(state: RootState) => state.config.data.earning,
	)
	const income = useMemo(
		() => (total > 0 ? earning.at(total - 1) : 0),
		[total, earning],
	)

	return (
		<div className={styles.wrapper}>
			<Hand />
			<div className={styles.container}>
				<div className={styles.heading}>
					<h2 className={styles.title}>{`$${income || 0} earned`}</h2>
					<p className={styles.subtitle}>Total score:</p>
				</div>
				<Button
					onClick={() => {
						dispatch(reset())
						dispatch(setGamePage())
					}}
				>
					Try again
				</Button>
			</div>
		</div>
	)
}
