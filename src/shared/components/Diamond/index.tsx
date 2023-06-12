'use client'

import type {ReactNode} from 'react'

import styles from './Diamond.module.scss'

export type DiamondProps = {
	size?: 'sm' | 'md'
	state?: 'default' | 'active' | 'current' | 'correct' | 'wrong' | 'disabled'
	cb?: Function
	children: ReactNode
}
export const Diamond = ({
	children,
	size = 'md',
	cb = () => {},
	state = 'default',
}: DiamondProps) => {
	return (
		<div
			className={styles.container}
			data-state={state}
			onClick={() => cb()}
			data-size={size}
		>
			<span className={styles.diamond}>{children}</span>
		</div>
	)
}
