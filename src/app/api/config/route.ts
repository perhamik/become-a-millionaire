import {NextResponse} from 'next/server'

import {IQuestion} from '@/src/shared/types'

import config from './data.json'

export type IConfig = {
	earning: Array<number>
	questions: Array<IQuestion>
}

export async function GET() {
	const data = config as IConfig
	return NextResponse.json({data})
}
