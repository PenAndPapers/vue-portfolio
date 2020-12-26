/* eslint-disable */
const path = require('path');

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@element': path.resolve(__dirname, 'src/components/elements'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@layout': path.resolve(__dirname, 'src/components/layouts'),
        '@module': path.resolve(__dirname, 'src/components/module'),
        '@skeleton': path.resolve(__dirname, 'src/components/skeleton'),
        '@directives': path.resolve(__dirname, 'src/directives'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
        '@plugins': path.resolve(__dirname, 'src/plugins'),
      },
    },
  },
  pwa: {
    name: 'Vue App',
    themeColor: '#35485e',
    manifestOptions: {
      backgroundColor: '#40b882',
    },
  },
};
