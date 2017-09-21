import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { LOCAL_SERVER, LOCAL_PORT } from '../src/app/config/constants';

import baseConfig, {
  CSS_REGEX,

  LOADER_POSTCSS,
  LOADER_SASS,
} from './base.config.babel.js'; // eslint-disable-line import/extensions

const PUBLIC_PATH = `//${LOCAL_SERVER}:${LOCAL_PORT}/`;

export default {
  ...baseConfig,

  devtool: 'eval-source-map',

  entry: [
    `webpack-hot-middleware/client?path=${PUBLIC_PATH}__webpack_hmr&reload=true`,
    ...baseConfig.entry,
  ],

  output: {
    ...baseConfig.output,

    publicPath: `http:${PUBLIC_PATH}`,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  module: {
    ...baseConfig.module,

    rules: [
      ...baseConfig.module.rules,

      {
        test: CSS_REGEX,
        // include: SRC_PATH,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          LOADER_POSTCSS,
          LOADER_SASS,
        ],
      },
    ],
  },

  plugins: [
    ...baseConfig.plugins,

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),

    new CopyWebpackPlugin([
      {
        from: './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
        to: './src/vendors/',
      },
    ]),

    new webpack.HotModuleReplacementPlugin(),
  ],
};
