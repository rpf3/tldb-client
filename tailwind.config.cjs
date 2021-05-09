const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: colors.gray
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
