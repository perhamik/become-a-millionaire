import styles from './EarnStep.module.scss'

export type EarnStepProps = {
	text: string
}

export const EarnStep = ({text}: EarnStepProps) => {
	return <li className={styles.step}>{text}</li>
}
