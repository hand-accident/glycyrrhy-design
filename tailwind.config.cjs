const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-hidden': {
					scrollbarWidth: 'none',
					'-ms-overflow-style': 'none',
					'&::-webkit-scrollbar': {
						width: '0px',
						background: 'transparent',
						display: 'none'
					},
					'& *::-webkit-scrollbar': {
						width: '0px',
						background: 'transparent',
						display: 'none'
					},
					'& *': {
						scrollbarWidth: 'none',
						'-ms-overflow-style': 'none'
					}
				}
			};
			addUtilities(newUtilities);
		}),
		plugin(function ({ addVariant }) {
			addVariant('next', '&+*');
		}),
		require('daisyui')
	]
};

module.exports = config;
