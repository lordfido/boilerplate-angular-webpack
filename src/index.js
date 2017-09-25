/* eslint-disable no-undef */
// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
// const log = debug('app:index');
// const logError = debug('error:app:index');

// Custom imports
import 'bootstrap/dist/js/bootstrap.min.js'; // eslint-disable-line import/extensions
import './styles/main.scss';

// Get ngApp initializer
import { initNgApp } from './app/app';

// Require images so webpack parse them
require.context('./images/', false, /\.(jpe?g|png|gif|svg|ico)?$/);

// Enable debug for these namespaces
debug.enable('app:*,error:*');

// Initialize the application
initNgApp();
