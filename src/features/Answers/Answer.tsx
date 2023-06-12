import styles from './Answer.module.scss'

type AnswerStates = 'default' | 'selected' | 'correct' | 'wrong'

export type AnswerProps = {
	text: string
	externalState?: AnswerStates
}

export const Answer = ({text, externalState}: AnswerProps) => {
	return (
		<li className={styles.item} data-state={externalState}>
			{text}
		</li>
	)
}
