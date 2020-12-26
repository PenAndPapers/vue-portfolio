const PRODUCTION = process.env.NODE_ENV === 'production';
/* eslint-disable */
const tailwindcss = require('tailwindcss');
/* eslint-disable */
const autoprefixer = require('autoprefixer');
/* eslint-disable */
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],

  whitelist: ['body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[a-zA-Z0-9-_:!%/]+/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind/config.js'),
    autoprefixer(),
    ...PRODUCTION ? [purgecss] : [],
  ],
};
