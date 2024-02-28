module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      },
      colors: {
        primary: {
          normal: '#1DB954',
          dark: '#0a451f'
        },
        secondary: {
          normal: '#2E77D0',
          dark: '#0a451f'
        },
        background: '#121212',
        gray: {
          darkest: '#333',
          dark: '#232323',
          light: '#282828',
          lightest: 'rgba(255,255,255,.1)'
        }
      },
      lineHeight: {
        2: '0.5rem'
      },
      width: {
        '1/6-20': 'calc(100% / 6 - 20px)',
        '1/4-20': 'calc(100% / 4 - 20px)',
        '1/3-20': 'calc(100% / 3 - 20px)',
        '1/2-20': 'calc(100% / 2 - 20px)',
        'full-20': 'calc(100% - 20px)'
      },
      gridTemplateColumns: {
        library: 'repeat(auto-fit, minmax(min(100%/3, max(128px, 100%/6)), 1fr))'
      },
      minWidth: {
        300: '300px',
        60: '60px'
      }
    }
  }
  // plugins: [require("@tailwindcss/line-clamp")],
}
