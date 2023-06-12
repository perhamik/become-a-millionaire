'use client'

import type {ReactNode} from 'react'

import styles from './Button.module.scss'

export type ButtonProps = {
	children: ReactNode
	onClick: Function
}

export const Button = ({children, onClick}: ButtonProps) => {
	return (
		<button className={styles.btn} onClick={() => onClick()}>
			{children}
		</button>
	)
}
