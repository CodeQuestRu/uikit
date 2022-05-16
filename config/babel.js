module.exports = {
  plugins: [
    // Импорт SVG-файлов
    "inline-react-svg",

    // Динамичкеский импорт стилей к антовским компонекнтам
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],

    // Динамичкеский импорт lodash
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],

    // Алиасы для путей импорта
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@icons': './src/assets/icons'
        },
      },
    ],
  ]
}