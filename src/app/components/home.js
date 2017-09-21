// eslint-disable-next-line import/newline-after-import
// import debug from 'debug';
// const log = debug('app:components:home');
// const logError = debug('error:app:components:home');

import homeTemplate from '../views/home.html';

const HomeCtrl = (['$scope', ($scope) => {
  $scope.greeting = 'hello';

  $scope.toggleGreeting = () => {
    $scope.greeting = ($scope.greeting === 'hello')
      ? 'whats up'
      : 'hello';
  };
}]);

export default {
  template: homeTemplate,
  controller: HomeCtrl,
};
