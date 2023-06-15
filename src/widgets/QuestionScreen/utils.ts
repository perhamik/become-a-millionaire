import type {Dispatch, RefObject, SetStateAction} from 'react'

import {DiamondState} from '@/src/shared/components/Diamond'
import {Question, Questions} from '@/src/shared/redux'
import {IAnswer} from '@/src/shared/types'

export type TAnswer = {
	state: DiamondState
	text: string
}

export const delay = (ms: number = 250): Promise<boolean> => {
	return new Promise((res) =>
		setTimeout(() => {
			res(true)
		}, ms),
	)
}

export const checkCorrectAnswer = (
	answ: string,
	list: Array<IAnswer>,
): boolean => {
	const currentAnswer = list.find((item) => item.title === answ)
	if (!currentAnswer) return false

	return currentAnswer.isCorrect
}

export const updateQuestionsList = (
	questions: Questions,
	current: Question,
): Questions => questions.filter((item) => item.title !== current.title)

export const setAnswerState = (
	el: RefObject<HTMLDivElement>,
	state: DiamondState,
): void => {
	const item = el?.current
	if (!item) return
	item.dataset.state = state
}

export const setSelectedAnswerState = (
	setter: Dispatch<SetStateAction<Array<DiamondState>>>,
	id: number,
) =>
	setter((prev) => prev.map((_, _id) => (id !== _id ? 'inactive' : 'active')))

export const setAnswerWrongOrCorrect = (
	setter: Dispatch<SetStateAction<Array<DiamondState>>>,
	id: number,
	isCorrect: boolean,
) =>
	setter((prev) =>
		prev.map((item, _id) =>
			id !== _id ? item : !isCorrect ? 'wrong' : 'correct',
		),
	)

export const setCorrectAnswer = (
	setter: Dispatch<SetStateAction<Array<DiamondState>>>,
	correctIndex: number,
) =>
	setter((prev) =>
		prev.map((item, _id) => (_id === correctIndex ? 'correct' : item)),
	)

export const setDefaultAnswerStates = (
	setter: Dispatch<SetStateAction<Array<DiamondState>>>,
) => setter((prev) => prev.map((_) => 'default'))
