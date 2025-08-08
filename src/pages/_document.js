import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang='en-US' className='antialiased font-jetBrain'>
			<Head>
				<Script
					id='gtag-js'
					strategy='afterInteractive'
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-W4ZSVZ6B49'
				/>
				<Script id='gtag-init' strategy='afterInteractive'>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-W4ZSVZ6B49');
					`}
				</Script>
				{(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
					// eslint-disable-next-line @next/next/no-sync-scripts
					<script
						data-project-id='BbjXP2sUYz2uXbn0bOPztFIHzhezx26Y9S4bx82x'
						data-is-production-environment='false'
						src='https://snippet.meticulous.ai/v1/meticulous.js'
					/>
				)}
			</Head>
			<body className='dark'>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VN9RWGN"
						height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}></noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
