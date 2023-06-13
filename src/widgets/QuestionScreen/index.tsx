'use client'

import {useRouter} from 'next/navigation'
import {useMemo, useState} from 'react'

import {Answers} from '@/src/features/Answers'
import {Earn} from '@/src/features/Earn'
import {Hamburger} from '@/src/shared/components'
import {
	RootState,
	increment,
	useAppDispatch,
	useAppSelector,
} from '@/src/shared/redux'

import styles from './QuestionScreen.module.scss'

export const QuestionScreen = () => {
	const dispatch = useAppDispatch()
	const config = useAppSelector((state: RootState) => state.config.data)
	const router = useRouter()
	const [questions, setQuestions] = useState(() => config.questions)

	const question = useMemo(
		() =>
			questions.length > 0 ? questions.find((item) => !item.answered) : null,
		[questions],
	)

	const answerClickHanlder = (answ: string) => {
		if (!question || !answ) return

		const currentAnswer = question.answers.find((item) => item.title === answ)
		if (!currentAnswer) return

		if (currentAnswer.isCorrect) {
			const leftQuestions = questions.filter(
				(item) => item.title !== question.title,
			)
			dispatch(increment())
			setQuestions(() => leftQuestions)

			!leftQuestions.length && router.push('/end')
		}

		!currentAnswer.isCorrect && router.push('/end')
	}

	if (!question) {
		!config.questions.length && router.push('/')
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
				list={question.answers.map((answer) => answer.title)}
			/>
			<aside className={styles.aside}>
				<Earn list={config.earning} />
			</aside>
		</div>
	)
}
