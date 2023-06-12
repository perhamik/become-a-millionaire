import {Diamond} from '@/src/shared/components'

import styles from './Earn.module.scss'
import {EarnStep} from './EarnStep'

export type EarnProps = {
	list: Array<number>
}

export const formatEarnContent = (value: number): string => '' + value

export const Earn = ({list}: EarnProps) => {
	return (
		<ul className={styles.list}>
			{list.map((step) => (
				<Diamond key={step}>
					<EarnStep text={formatEarnContent(step)} />
				</Diamond>
			))}
		</ul>
	)
}
