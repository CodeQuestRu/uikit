
const { injectBabelPlugin } = require('react-app-rewired');
// const { override } = require("customize-cra");

// Плагины
const rewireImport = require('react-app-rewire-import');

const rewireSvg = (config, env, importBabelOptions = {}) => {
  config = injectBabelPlugin(['inline-react-svg', importBabelOptions], config);
  return config;
}

// Конфигурация
module.exports = function override(config, env) {
  // Динамическая загрузка стилей для Ant Design
  config = rewireImport(config, env, {
    libraryName: 'antd',
    style: true
  });

  // Поддержка SVG
  config = rewireSvg(config, env);

  return config;
}