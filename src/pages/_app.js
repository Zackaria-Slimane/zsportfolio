import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from '@/components/Layout';
import { ToTop } from '@/components/ui/ToTop';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [path, setPath] = useState(router.pathname);
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtag) {
				window.gtag('config', 'G-W4ZSVZ6B49', { page_path: url });
			}
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-W4ZSVZ6B49'
				strategy='afterInteractive'
			/>
			<Script id='gtag-init' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-W4ZSVZ6B49');
				`}
			</Script>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000910' />
				<meta name='og:image' content='/zs.png' />
				<meta name='og:title' content='Zakaria SLIMANE Software Developer DevOps & cloud' />
				<meta name='twitter:title' content='Zakaria SLIMANE - Software Developer' />
				<meta name='og:description' content='Zakaria SLIMANE Software Developer DevOps & cloud' />
				<meta
					name='description'
					content='Zakaria SLIMANE Software Developer DevOps & cloud. AWS Certified'
				/>
				<meta
					name='twitter:description'
					content='Zakaria Slimane Software Developer DevOps & cloud. AWS Certified'
				/>
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='robots' content='index, follow' />
				<meta
					name='description'
					content='Software developer specializing in JavaScript ES6, React, and Golang Based in Morocco. Crafting seamless, interactive web experiences, wordpress sites and shopify ecommerce sites. Excited about DevOps, Cloud Engineering, CI/CD automations. AWS certified solutions architect.'
				/>
				<title>Zakaria Slimane | Software Developer, DevOps & Cloud AWS certified | Morocco</title>
			</Head>

			<Layout theme={theme} path={path} setPath={setPath}>
				<ToTop />
				<ThemeSwitcher theme={theme} setTheme={setTheme} />
				<SpeedInsights />
				<Analytics />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
