// tailwind.config.js
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'samsktrigrama': ['SamsktriGrama', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}