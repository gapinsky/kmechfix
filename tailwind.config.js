/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
			'sm2': '350px',
			},
			backgroundImage: {
				'radial-center':
					'radial-gradient(circle at center, #608ff5 0%, #ffffff 60%)',
			},
			colors: {
				main: '#1658b6',
			},
		},
	},
	plugins: [],
};
