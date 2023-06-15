'use client'

import type {ReactNode} from 'react'
import React from 'react'

import styles from './Diamond.module.scss'

export type DiamondState =
	| 'default'
	| 'inactive'
	| 'active'
	| 'current'
	| 'correct'
	| 'wrong'
	| 'disabled'

export type DiamondProps = {
	size?: 'sm' | 'md'
	state?: DiamondState
	cb?: Function
	children: ReactNode
}

export const Diamond = React.forwardRef(
	(
		{children, size = 'md', cb = () => {}, state = 'default'}: DiamondProps,
		ref: React.ForwardedRef<HTMLDivElement>,
	) => (
		<div
			ref={ref}
			className={styles.container}
			data-state={state}
			onClick={() => cb()}
			data-size={size}
		>
			<span className={styles.diamond}>{children}</span>
		</div>
	),
)

Diamond.displayName = 'Diamond'
