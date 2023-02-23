module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			desktop: '1440px',
			mobile: '375px',
		},
		colors: {
			red: '#FF0000',
		},
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		},
		fontSize: {
			l: ['40px', { lineHeight: '40px', fontWeight: 700 }],
			m: ['18px', { lineHeight: '18px', fontWeight: 700 }],
			s: ['14px', { lineHeight: '14px', fontWeight: 400 }],
			xs: ['12px', { lineHeight: '12px', fontWeight: 400 }],
		},
		extend: {},
	},
	plugins: [],
};
