// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('app:routes');
// const logError = debug('error:app:routes');


const mainState = {
  name: 'main',
  redirectTo: 'welcome',
  component: 'main',
};

const baseState = {
  parent: 'main',
  name: 'base',
  views: {
    'header@main': {
      component: 'header',
    },
    'footer@main': {
      component: 'footer',
    },
  },
};

const homeState = {
  parent: 'main',
  name: 'home',
  url: '/home',
  views: {
    'content@main': {
      component: 'home',
    },
  },
};

const qlikDemoState = {
  parent: 'main',
  name: 'qlik-demo',
  url: '/qlik-demo',
  views: {
    'content@main': {
      component: 'qlikdemo',
    },
  },
};

const aboutState = {
  parent: 'main',
  name: 'about',
  url: '/about',
  views: {
    'content@main': {
      component: 'about',
    },
  },
};

const routes = ([
  '$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
    log('Setting up routes');

    // Replace native Angular 1.6.x '!' hash with selected one
    $locationProvider.hashPrefix('');
    // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({ state: 'home' });

    const $stateRegistry = $uiRouter.stateRegistry;
    $stateRegistry.register(mainState);
    $stateRegistry.register(baseState);
    $stateRegistry.register(homeState);
    $stateRegistry.register(qlikDemoState);
    $stateRegistry.register(aboutState);
  },
]);

export default routes;
