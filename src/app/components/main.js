// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('app:components:main');
const logError = debug('error:app:components:main');

import mainTemplate from '../views/main.html';

const MainCtrl = (['$scope', ($scope) => {
  $scope.route = location.hash; // eslint-disable-line no-undef

  log('Hello world! This is a log example');
  logError('Oh no, something bad just happened');

  // Some events
  $scope.$on('$locationChangeSuccess', () => {
    $scope.route = location.hash; // eslint-disable-line no-undef
  });
}]);

export default {
  template: mainTemplate,
  controller: MainCtrl,
};
