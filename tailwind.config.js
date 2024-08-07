/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'bounce-slow': 'bounce 3s linear infinite',
			},
			fontFamily: {
				space: ['Space Mono', 'monospace', 'cursive'],
			},
			colors: {
				lightblue: '#06bee1',
			},
		},
	},
	plugins: [typography],
};
