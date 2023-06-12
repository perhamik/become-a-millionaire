'use client'

import Image from 'next/image'

import handIcon from '@/public/hand.svg'

import styles from './Hand.module.scss'

export const Hand = () => {
	return (
		<figure className={styles.figure}>
			<Image src={handIcon} width={624} height={367} alt="Hand" priority />
		</figure>
	)
}
