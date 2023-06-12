import {Inter} from 'next/font/google'
import {Metadata} from 'next/types'

import {Providers} from '@/src/shared/redux'

import './globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Who wants to be a millionaire?',
	description: 'Simple famous game',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			url: '/icon192.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '256x256',
			url: '/icon256.png',
		},
		{
			rel: 'icon',
			url: 'favicon.ico',
		},
	],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
