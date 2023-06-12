'use client'

import styles from './Answer.module.scss'

type AnswerStates = 'default' | 'selected' | 'correct' | 'wrong'

export type AnswerProps = {
	text: string
	handler: Function
	externalState?: AnswerStates
}

export const Answer = ({text, handler, externalState}: AnswerProps) => {
	return (
		<li
			className={styles.item}
			role="button"
			onClick={() => handler()}
			data-state={externalState}
		>
			{text}
		</li>
	)
}
