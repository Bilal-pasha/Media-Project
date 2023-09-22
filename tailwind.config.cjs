/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		backgroundImage:{
			"gradient": 'linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%)'
		},
		colors:{
			'blue' : 'blue',
			'white' : 'white',
			'gray' : 'gray',
			'skyblue' : '#6CB4EE',
		},
		screens: {
			'sm': '320px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '760px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1200px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1480px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  } 
	},
	plugins: [],
}
