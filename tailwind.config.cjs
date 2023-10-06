/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	], theme: {
		extend: {},
		backgroundImage: {
			"gradient": 'linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%)'
		},
		colors: {
			'blue': '#1E90FF',
			'white': 'white',
			'gray': 'gray',
			'semigray': "#a09898",
			'skyblue': '#6CB4EE',
			'black': 'black',
			'semiblack': '#0000007d',
			'lightWhite': '#e9e1e1',
			'red': 'red',
			'transparent': 'transparent',
			'lightred' : '#f1f1f1',
			'lightgray': '#c3c3c3'
		},
		screens: {
			'sm': '300px',
			// => @media (min-width: 640px) { ... }

			'md': '900px',
			// => @media (min-width: 768px) { ... }

			'lg': '1340px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1480px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		}
	},

}

