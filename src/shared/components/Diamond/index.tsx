import type {ReactNode} from 'react'

import styles from './Diamond.module.scss'

export type DiamondProps = {
	state?: 'default' | 'active' | 'correct' | 'wrong'
	children: ReactNode
}
export const Diamond = ({children, state = 'default'}: DiamondProps) => {
	return (
		<div className={styles.container} data-state={state}>
			<span className={styles.diamond}>{children}</span>
		</div>
	)
}
