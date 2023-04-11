/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app.css'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['coffee']
	}
};
