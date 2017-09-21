import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';

import postcssConfig from '../postcss.config';

const CSS_REGEX = /\.s?css$/;
const SRC_PATH = path.resolve(__dirname, 'src');

/**
 * PostCSS
 * Reference: https://github.com/postcss/autoprefixer-core
 * Add vendor prefixes to your css
 */
const LOADER_POSTCSS = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      ...postcssConfig.plugins,
    ],
  },
};

const LOADER_SASS = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    importer: jsonImporter,
  },
};

const webpackConfig = {
  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  output: {
    // Absolute output directory
    path: `${__dirname}/../dist`,
  },

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  module: {
    rules: [
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      {
        test: /\.js$/,
        exclude: /node_modules|webpack/,
        loader: 'babel-loader',
      },
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: /node_modules|webpack/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'assets/',
        },
      },
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      {
        test: /\.html$/,
        exclude: /node_modules|webpack/,
        loader: 'raw-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
      '.json',
    ],
  },

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
};

export {
  webpackConfig as default,
  CSS_REGEX,

  SRC_PATH,

  LOADER_POSTCSS,
  LOADER_SASS,
};
