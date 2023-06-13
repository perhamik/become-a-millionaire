'use client'

import {useRouter} from 'next/navigation'
import {useMemo} from 'react'

import {Button, Hand} from '@/src/shared/components'
import {RootState, useAppSelector} from '@/src/shared/redux'

import styles from './FinalScreen.module.scss'

export const FinalScreen = () => {
	const router = useRouter()

	const total = useAppSelector((state: RootState) => state.counter.value)
	const earning = useAppSelector(
		(state: RootState) => state.config.data.earning,
	)
	const income = useMemo(
		() => (earning.length > total ? earning.at(total - 1) : earning.at(-1)),
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
				<Button onClick={() => router.push('/')}>Try again</Button>
			</div>
		</div>
	)
}
