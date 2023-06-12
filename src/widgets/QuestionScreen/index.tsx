'use client'

import {Answers} from '@/src/app/features/Answers'
import type {IQuestion} from '@/src/shared/types'

import styles from './QuestionScreen.module.scss'

const question: IQuestion = {
	title: "What does the 'MP' stand for in MP3?",
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

export type QuestionProps = {}

const answerClickHanlder = () => {}

export const QuestionScreen = () => {
	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<h2 className={styles.title}>{question.title}</h2>
				<Answers
					itemHandler={answerClickHanlder}
					list={question.answers.map((answer) => answer.title)}
				/>
			</section>
		</div>
	)
}
