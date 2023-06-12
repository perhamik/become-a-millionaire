'use client'

import {Answers} from '@/src/features/Answers'
import {Earn} from '@/src/features/Earn'
import {Hamburger} from '@/src/shared/components'
import type {IQuestion} from '@/src/shared/types'

import styles from './QuestionScreen.module.scss'

const question: IQuestion = {
	title: 'How old your elder brother was 10 years before you was born, mate?',
	answers: [
		{
			title: 'Moving Picture',
			isCorrect: true,
		},
		{
			title: 'Music Player',
			isCorrect: false,
		},
		{
			title: 'Multi Pass',
			isCorrect: false,
		},
		{
			title: 'Micro Point',
			isCorrect: false,
		},
	],
}

const earnings = [
	500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000,
	1000000,
]

export type QuestionProps = {}

const answerClickHanlder = (answ: string) => {}

export const QuestionScreen = () => {
	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<h2 className={styles.title}>{question.title}</h2>
				<Hamburger>
					<Earn list={earnings} />
				</Hamburger>
			</section>
			<Answers
				selectEvent={answerClickHanlder}
				list={question.answers.map((answer) => answer.title)}
			/>
			<aside className={styles.aside}>
				<Earn list={earnings} />
			</aside>
		</div>
	)
}
