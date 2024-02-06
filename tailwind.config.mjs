/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily:{
				'hanken-grotesk': ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui']
			},
			screens:{
				'xs':'400px',
			},
			backgroundImage: theme=>({
			'noisy-pattern': "url('/src/icons/noisy.webp')"
			})
		},
	},
	plugins: [],
}
