/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                color1: 'var(--color1)',
                color2: 'var(--color2)',
                color3: 'var(--color3)',
                color4: 'var(--color4)',
                color5: 'var(--color5)',
                color6: 'var(--color6)',
                color7: 'var(--color7)',
                color8: 'var(--color8)',
                color9: 'var(--color9)',
                color11: 'var(--color11)',
            },
            fontFamily: {
                sans: ['Noto Sans JP', 'serif'],
            },
            fontWeight: {
                100: 'var(--100)',     // Use custom variable for 100 weight
                200: 'var(--200)',     // Use custom variable for 200 weight
                300: 'var(--300)',     // Use custom variable for 300 weight
                400: 'var(--400)',     // Use custom variable for 400 weight
                500: 'var(--500)',     // Use custom variable for 500 weight
                600: 'var(--600)',     // Use custom variable for 600 weight
                700: 'var(--700)',     // Use custom variable for 700 weight
                800: 'var(--800)',     // Use custom variable for 800 weight
                900: 'var(--900)',     // Use custom variable for 900 weight
            },
            screens: {
                xs: '400px'
            }
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
