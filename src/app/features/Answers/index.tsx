'use client'

import {Diamond} from '@/src/shared/components'

import {Answer} from './Answer'
import styles from './Answer.module.scss'

export type AnswersProps = {
	list: Array<string>
	itemHandler: Function
}

export const Answers = ({list, itemHandler}: AnswersProps) => {
	return (
		<ol className={styles.list}>
			{list.map((item) => (
				<Diamond key={item}>
					<Answer text={item} handler={itemHandler} />
				</Diamond>
			))}
		</ol>
	)
}
