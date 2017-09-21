// Development server
/**
 * If you enable this your.local.ip.address instead of 'localhost'
 * you'll be able to access from external devices (such as movile phones)
 */
export const LOCAL_SERVER = 'localhost';
// export const LOCAL_SERVER = 'your.local.ip.address';

export const LOCAL_PORT = '8080';

// Qlik Sense server
export const SENSE_SERVERNAME = 'qmi-qs-gss';
export const SENSE_PORT = 80;
export const SENSE_URL = `http://${SENSE_SERVERNAME}`;

// Angular dependencies
export const PACKAGES = [
  {
    // Path where our library is located (under node_modules folder)
    path: './node_modules/@uirouter/angularjs/release/',
    // Name of the file (under node_modules folder)
    filename: 'angular-ui-router.js',
    // The alias that angularJS is gonna use when injecting it
    alias: 'ui.router',
    // Dependencies to use on require's shim
    deps: ['angular'],
  },
];
export const DEST = '/src/vendors/';
