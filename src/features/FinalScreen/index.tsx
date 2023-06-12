'use client'

import {useSelector} from 'react-redux'

import {RootState} from '@/src/process/redux'
import {Button, Hand} from '@/src/shared/components'

import styles from './FinalScreen.module.scss'

export const FinalScreen = () => {
	const total = useSelector((state: RootState) => state.counter.value)
	return (
		<div className={styles.wrapper}>
			<Hand />
			<div className={styles.container}>
				<div className={styles.heading}>
					<h2 className={styles.title}>{`$${total} earned`}</h2>
					<p className={styles.subtitle}>Total score:</p>
				</div>
				<Button onClick={() => {}}>Try again</Button>
			</div>
		</div>
	)
}
