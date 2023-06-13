'use client'

import {useRouter} from 'next/navigation'

import {Button, Hand} from '@/src/shared/components'
import useWindowSize from '@/src/shared/hooks/useWindowSize'
import {getConfig, reset, useAppDispatch} from '@/src/shared/redux'
import {setVH} from '@/src/shared/utils'

import styles from './InitialScreen.module.scss'

export const InitialScreen = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	getConfig()
	dispatch(reset())

	useWindowSize(() => {
		setVH()
	})

	return (
		<div className={styles.wrapper}>
			<Hand />
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1 className={styles.title}>Who wants to be a millionaire?</h1>
				</div>
				<Button onClick={() => router.push('/game')}>Start</Button>
			</div>
		</div>
	)
}
