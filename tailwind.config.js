/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: require('./commons/theme/screens'),
    spacing: require('./commons/theme/spacing'),
    inset: require('./commons/theme/spacing'),
    colors: require('./commons/theme/colors'),
    fontWeight: require('./commons/theme/fontWeight'),
    fontSize: require('./commons/theme/fontSize'),
    borderRadius: require('./commons/theme/borderRadius'),
    lineHeight: require('./commons/theme/lineHeight'),
    container: require('./commons/theme/container'),
    maxWidth: require('./commons/theme/maxWidth'),
    minWidth: require('./commons/theme/minWidth'),
    maxHeight: require('./commons/theme/maxHeight'),
    minHeight: require('./commons/theme/minHeight'),
    display: require('./commons/theme/display'),
  },
  plugins: [],
};
