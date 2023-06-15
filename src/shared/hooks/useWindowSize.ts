'use client'

import {useLayoutEffect} from 'react'

import {throttle} from '../utils'

export default function useWindowSize(func = () => {}) {
	const handleResize = throttle(func, 80)
	useLayoutEffect(() => {
		window.addEventListener('orientationchange', handleResize, {passive: true})
		window.addEventListener('resize', handleResize, {passive: true})

		handleResize()
		return () => {
			window.removeEventListener('orientationchange', handleResize)
			window.removeEventListener('resize', handleResize)
		}
	})
}
