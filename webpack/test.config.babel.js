import baseConfig from './base.config.babel.js'; // eslint-disable-line import/extensions

export default {
  ...baseConfig,

  devtool: 'inline-source-map',

  entry: undefined,

  output: {},

  module: {
    ...baseConfig.module,

    rules: [
      ...baseConfig.module.rules,

      // Avoid loading CSS files while testing
      {
        test: /\.s?css$/,
        loader: 'null-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: /node_modules|webpack/,
        loader: 'null-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules|webpack/,
        loader: 'null-loader',
      },

      // ISTANBUL LOADER
      // https://github.com/deepsweet/istanbul-instrumenter-loader
      // Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
      // Skips node_modules and files that end with .spec.js
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /\.spec\.js$/,
        ],
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true,
        },
      },
    ],
  },
};
