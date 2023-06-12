export type IAnswer = {
	title: string
	isCorrect: boolean
}

export type IQuestion = {
	title: string
	answers: Array<IAnswer>
}
