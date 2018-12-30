const path = require('path');

export default {
  entry: 'src/index.js',
  // 因为是以模块化引入的，所以自己的样式必须以styles.方式引入，但是现在加了card的动态翻页效果的那个插件就不行了，只能把这个禁用了
  disableCSSModules: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    "lodash"
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: false,
  proxy: {
    "/ISAPI": {
      "target": "http://192.168.0.133",
      "changeOrigin": true
    }
  }

};
