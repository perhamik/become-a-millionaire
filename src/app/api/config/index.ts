import type {IConfig} from './route'

export const getConfigFromApi = (): Promise<IConfig> =>
	fetch('/api/config').then((res) => res.json())
