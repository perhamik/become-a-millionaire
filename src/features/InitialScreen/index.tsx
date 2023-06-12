'use client'

import {Button, Hand} from '@/src/shared/components'
import useWindowSize from '@/src/shared/hooks/useWindowSize'
import {setVH} from '@/src/shared/utils'

import styles from './InitialScreen.module.scss'

export const InitialScreen = () => {
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
				<Button onClick={() => {}}>Start</Button>
			</div>
		</div>
	)
}
