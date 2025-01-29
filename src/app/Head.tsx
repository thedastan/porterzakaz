import Head from 'next/head'
import Script from 'next/script'

import { SEO_KEY_WORDS, SITE_NAME } from '@/constants/seo/seo.constants'
import { THEME_COLOR } from '@/config/_variables.config'

const Head = () => {
	return (
		<>
			<Head>
				<meta name='theme-color' content={THEME_COLOR} />
				<meta name='google-site-verification' content='fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/icon-192x192.png' />
				<meta name='description' content={SEO_KEY_WORDS} />
				<meta property='og:title' content={SITE_NAME} />
				<meta property='og:description' content={SEO_KEY_WORDS} />
				<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
				<meta name='robots' content='index, follow' />
			</Head>

			{/* Google Analytics */}
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-FT4V71V5R5'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-FT4V71V5R5');
					`,
				}}
			/>
		</>
	)
}

export default Head
