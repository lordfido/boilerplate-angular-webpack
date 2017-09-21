/* eslint-disable no-undef */
// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('app:app');
// const logError = debug('error:app:app');

import angular from 'angular';
import routes from './routes';

// Components
import HeaderComponent from './components/partials/header';
import FooterComponent from './components/partials/footer';
import MainComponent from './components/main';
import HomeComponent from './components/home';
import QlikDemoComponent from './components/qlik-demo';
import AboutComponent from './components/about';

const MODULE_NAME = 'app';

const initNgApp = () => {
  log('Initializing ngApp');

  angular.module(MODULE_NAME, ['ui.router'])
    // Routes
    .config(routes)

    // Components
    .component('headr', HeaderComponent)
    .component('footr', FooterComponent)
    .component('main', MainComponent)
    .component('home', HomeComponent)
    .component('qlikdemo', QlikDemoComponent)
    .component('about', AboutComponent)
  ;

  // Injecting qlik-angular as dependency
  angular.bootstrap(
    document.getElementById('appWrapper'),
    [MODULE_NAME, 'qlik-angular'],
  );
};

export {
  MODULE_NAME as default,
  initNgApp,
};
