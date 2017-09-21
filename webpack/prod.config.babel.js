import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  CSS_REGEX,
  LOADER_POSTCSS,
  LOADER_SASS,
} from './base.config.babel.js'; // eslint-disable-line import/extensions

const extractSCSS = new ExtractTextPlugin({
  filename: 'css/[name]-[hash].min.css',
  allChunks: true,
});

export default {
  ...baseConfig,

  devtool: 'source-map',

  entry: {
    ...baseConfig.entry,
  },

  output: {
    ...baseConfig.output,

    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
  },

  module: {
    ...baseConfig.module,

    rules: [
      ...baseConfig.module.rules,

      {
        test: CSS_REGEX,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              ...LOADER_POSTCSS,
              options: {
                ...LOADER_POSTCSS.options,
                plugins: [
                  ...LOADER_POSTCSS.options.plugins,
                  // mqpacker,
                ],
              },
            },
            LOADER_SASS,
          ],
        }),
      },
    ],
  },

  plugins: [
    extractSCSS,

    ...baseConfig.plugins,

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noemitonerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin(),

    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    // new CopyWebpackPlugin([{
    //   from: './src/images',
    // }]),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
};
