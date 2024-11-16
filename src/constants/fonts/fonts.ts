import { Inter, Open_Sans, Unbounded } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin', 'cyrillic', 'latin-ext', 'greek'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const open_sans = Open_Sans({
	subsets: ['latin', 'cyrillic', 'latin-ext', 'greek'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap'
})

export const unbounded = Unbounded({
	subsets: ['latin', 'cyrillic', 'latin-ext'],
	weight: ['400', '500', '600', '700'],
	display: 'swap'
})
