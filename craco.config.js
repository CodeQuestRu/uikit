// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const CracoAntDesignPlugin = require("craco-antd");

// Конфигцрация для Babel
const configBabel = require('./config/babel');
// Конфигурация для Webpack
const configWebpack = require('./config/webpack');


module.exports = {
  // Настройки для Webpack
  webpack: {
    plugins: configWebpack.plugins,
    configure: (webpackConfig, { env, paths }) => {
      // Добавлям загрузчики
      webpackConfig.module.rules.push(...configWebpack.module.rules);
      return webpackConfig;
    }
  },
  // Настройки для Babel
  babel: configBabel
};
