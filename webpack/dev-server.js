// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('webpack:dev-server');
// const logError = debug('error:webpack:dev-server');

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { LOCAL_SERVER, LOCAL_PORT } from '../src/app/config/constants';
import config from './dev.config.babel.js'; // eslint-disable-line import/extensions

const publicPath = config.output && config.output.publicPath;

// Enables any debug log that starts with 'dev:'
debug.enable('webpack:*,error:webpack:*');

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
  }),
);

app.use(
  // Allow hot middleware to update CSS without refreshing the page
  webpackHotMiddleware(compiler),
);

app.listen(LOCAL_PORT, LOCAL_SERVER, () => {
  log(`'webpack-dev-server' has been started at http://${LOCAL_SERVER}:${LOCAL_PORT}`);
});
