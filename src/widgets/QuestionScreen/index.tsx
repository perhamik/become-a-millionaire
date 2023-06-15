'use client'

import {useMemo, useState} from 'react'

import {Answers} from '@/src/features/Answers'
import {Earn} from '@/src/features/Earn'
import {Hamburger} from '@/src/shared/components'
import {DiamondState} from '@/src/shared/components/Diamond'
import {
	RootState,
	increment,
	setFinalPage,
	setInitPage,
	useAppDispatch,
	useAppSelector,
} from '@/src/shared/redux'

import styles from './QuestionScreen.module.scss'
import {
	TAnswer,
	checkCorrectAnswer,
	delay,
	setAnswerWrongOrCorrect,
	setCorrectAnswer,
	setDefaultAnswerStates,
	setSelectedAnswerState,
	updateQuestionsList,
} from './utils'

export const QuestionScreen = () => {
	const dispatch = useAppDispatch()
	const config = useAppSelector((state: RootState) => state.config.data)
	const [questions, setQuestions] = useState(() => config.questions)
	const [answersStates, setAnswersState] = useState<Array<DiamondState>>(() =>
		Array(questions.at(0)?.answers.length || 4).fill('default'),
	)

	const question = useMemo(
		() =>
			questions.length > 0 ? questions.find((item) => !item.answered) : null,
		[questions],
	)

	const answerClickHanlder = async (answ: TAnswer, id: number) => {
		if (!question || !answ) return

		const correctIndex = question.answers.findIndex((item) => item.isCorrect)
		const isCorrect =
			checkCorrectAnswer(answ.text, question.answers) && id === correctIndex

		setSelectedAnswerState(setAnswersState, id)
		await delay(1000)

		setAnswerWrongOrCorrect(setAnswersState, id, isCorrect)

		await delay(2500)

		if (!isCorrect) {
			setCorrectAnswer(setAnswersState, correctIndex)
			await delay(2500)
			dispatch(setFinalPage())
			return
		}

		const leftQuestions = updateQuestionsList(questions, question)
		setDefaultAnswerStates(setAnswersState)
		dispatch(increment())
		setQuestions(() => leftQuestions)

		!leftQuestions.length && dispatch(setFinalPage())
	}

	if (!question) {
		!config.questions.length && dispatch(setInitPage())
		return null
	}

	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<h2 className={styles.title}>{question.title}</h2>
				<Hamburger>
					<Earn list={config.earning} />
				</Hamburger>
			</section>
			<Answers
				selectEvent={answerClickHanlder}
				list={question.answers.map((answer, _id) => {
					return {state: answersStates.at(_id) || 'default', text: answer.title}
				})}
			/>
			<aside className={styles.aside}>
				<Earn list={config.earning} />
			</aside>
		</div>
	)
}
