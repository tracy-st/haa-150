/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //
    './content/**/*.{md,mdx,tsx}',
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx,css}',
    './node_modules/exhibition-viewer/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
