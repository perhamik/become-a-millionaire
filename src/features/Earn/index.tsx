import {useSelector} from 'react-redux'

import {Diamond} from '@/src/shared/components'
import {RootState} from '@/src/shared/redux'

import styles from './Earn.module.scss'
import {EarnStep} from './EarnStep'

export type EarnProps = {
	list: Array<number>
}

const _FORMAT = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
	useGrouping: true,
})

export const formatEarnContent = (value: number): string =>
	_FORMAT.format(value)

export const Earn = ({list}: EarnProps) => {
	const count = useSelector((state: RootState) => state.counter.value)

	return (
		<ul className={styles.list}>
			{list.map((step, id) => {
				const state = id === count ? 'current' : 'default'
				return (
					<Diamond key={step} size="sm" state={id < count ? 'disabled' : state}>
						<EarnStep text={formatEarnContent(step)} />
					</Diamond>
				)
			})}
		</ul>
	)
}
