import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F7F2EA',
        cream: '#FFFDFC',
        ink: '#171717',
        muted: '#5B5B5B',
        border: '#E8DED2',
        safety: '#1F6F4A',
        saffron: '#D78232',
        alert: '#C84D3A',
        coral: '#F0624D',
        plum: '#6F3B5F'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23,23,23,0.08)'
      },
      borderRadius: {
        xl2: '1.5rem'
      }
    }
  },
  plugins: []
};

export default config;
