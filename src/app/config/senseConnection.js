/* eslint-disable no-undef */
// eslint-disable-next-line import/newline-after-import
// import debug from 'debug';
// const log = debug('app:config:qlik');
// const logError = debug('error:app:config:qlik');

import { SENSE_SERVERNAME, SENSE_PORT } from './constants';

// Current enviroment
const enviroment = 'local';
let senseConnection = {}; // eslint-disable-line import/no-mutable-exports

// Avaliable enviroments 
switch (enviroment) {
  case 'production':
    senseConnection = {
      host: 'sense-demo.qlik.com',
      port: 443,
      protocol: 'https:',
      prefix: '/site/',
      isSecure: true,
      appName: 'a9ad1e16-9fdc-4d5e-9c85-9e19bfbca371',
    };
    break;

  case 'development':
    senseConnection = {
      host: 'sense-demo.qlik.com',
      port: 443,
      protocol: 'https:',
      prefix: '/site/',
      isSecure: true,
      appName: 'a9ad1e16-9fdc-4d5e-9c85-9e19bfbca371',
    };
    break;

  default:
    senseConnection = {
      host: SENSE_SERVERNAME,
      port: SENSE_PORT,
      protocol: 'http:',
      prefix: '/',
      isSecure: false,
      appName: 'f5413c7f-274b-4429-b76a-5333e6103764',
    };
}

export default senseConnection;
