'use client'

import {Button, Hand} from '@/src/shared/components'
import {getConfig, reset, setGamePage, useAppDispatch} from '@/src/shared/redux'

import styles from './InitialScreen.module.scss'

export const InitialScreen = () => {
	const dispatch = useAppDispatch()

	getConfig()
	dispatch(reset())

	return (
		<div className={styles.wrapper}>
			<Hand />
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1 className={styles.title}>Who wants to be a millionaire?</h1>
				</div>
				<Button onClick={() => dispatch(setGamePage())}>Start</Button>
			</div>
		</div>
	)
}
