module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Mulish'],
      body: ['Mulish'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      height: {
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
      },
      colors: {
        transparent: 'transparent',
        black: '#171725',
        white: '#ffffff',
        beige: '#F5F2EB',
        powderBlue: '#F9FAFF',
        darkBeige: '#E8E6E2',
        blue: {
          100: '#52B2FF',
          200: '#299FFF',
          300: '#018DFF',
          400: '#0077D7',
          500: '#0060AE',
          600: '#004176',
          700: '#00223E',
          800: '#000306',
          900: '#000000',
        },
        midnight: {
          100: '#2780E2',
          200: '#1A6CC6',
          300: '#1658A2',
          400: '#11457E',
          500: '#0C315A',
          600: '#051629',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        red: {
          100: '#F9B3B5',
          200: '#F58D91',
          300: '#F2676D',
          400: '#EF4248',
          500: '#EC1C24',
          600: '#C01017',
          700: '#8C0C11',
          800: '#58070B',
          900: '#250304',
        },
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '2.5xl': '1.75rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
