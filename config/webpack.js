// Плагины
const WebpackBar = require("webpackbar");

// Вставка переменных
// const themeVariables = require('../src/config/antd-variables');



module.exports = {
  // Плагины
  plugins: [
    new WebpackBar({
      profile: true
    })
  ],

  // Лоадеры
  module: {
    rules: [
      // Поддержка Less
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                // modifyVars: themeVariables
              }
            }
          }
        ]
      },

      // Поддерджка SVG
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      }
    ]
  }
}