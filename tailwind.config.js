/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          DEFAULT: '#1d0d07',
          dark: '#090100'
        },
        pipboy: {
          light: '#fafad2',
          DEFAULT: '#FFA500',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
