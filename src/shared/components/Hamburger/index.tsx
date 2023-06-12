'use client'

import {type ReactNode, useState} from 'react'

import styles from './Hamburger.module.scss'

export type HamburgerProps = {
	children: ReactNode
}

export const Hamburger = ({children}: HamburgerProps) => {
	const [btnState, setBtnState] = useState<boolean>(false)

	return (
		<>
			<button
				className={styles.button}
				onClick={() => setBtnState((prev) => !prev)}
				data-state={btnState ? 'active' : 'inactive'}
			>
				<span className={styles.button__line}></span>
				<span className={styles.button__line}></span>
				<span className={styles.button__line}></span>
			</button>
			<div className={styles.container}>{children}</div>
		</>
	)
}
