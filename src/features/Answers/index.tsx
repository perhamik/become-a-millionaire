'use client'

import {Diamond} from '@/src/shared/components'
import {DiamondState} from '@/src/shared/components/Diamond'

import {Answer} from './Answer'
import styles from './Answer.module.scss'

export type AnswersProps = {
	list: Array<{state: DiamondState; text: string}>
	selectEvent: Function
}

export const Answers = ({list, selectEvent}: AnswersProps) => {
	return (
		<ol className={styles.list}>
			{list.map((item, id) => {
				return (
					<Diamond
						key={item.text}
						state={item.state}
						cb={() => selectEvent(item, id)}
					>
						<Answer text={item.text} />
					</Diamond>
				)
			})}
		</ol>
	)
}
