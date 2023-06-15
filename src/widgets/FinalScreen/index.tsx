'use client'

import {useSelector} from 'react-redux'

import {Button, Hand} from '@/src/shared/components'
import {
	incomeSelect,
	reset,
	setGamePage,
	useAppDispatch,
} from '@/src/shared/redux'

import styles from './FinalScreen.module.scss'

export const FinalScreen = () => {
	const dispatch = useAppDispatch()
	const income = useSelector(incomeSelect)
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
