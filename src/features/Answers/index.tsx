'use client'

import {Diamond} from '@/src/shared/components'

import {Answer} from './Answer'
import styles from './Answer.module.scss'

export type AnswersProps = {
	list: Array<string>
	selectEvent: Function
}

export const Answers = ({list, selectEvent}: AnswersProps) => {
	return (
		<ol className={styles.list}>
			{list.map((item) => (
				<Diamond key={item} cb={() => selectEvent(item)}>
					<Answer text={item} />
				</Diamond>
			))}
		</ol>
	)
}
