import MODULE_NAME from '../app';

describe('Components: mainComponent', () => {
  beforeEach(() => {
    angular.mock.module(MODULE_NAME, []);
  });

  var element, scope, controller;

  beforeEach(() => {
    angular.mock.inject(($rootScope, $compile) => {
      // Create a new scope
      scope = $rootScope.$new();

      // Create a template with the component
      element = angular.element('<main-component></main-component>');

      // Bind component&scope
      element = $compile(element)(scope);
      scope.$apply();

      // Get our component's controller
      controller = element.controller('mainComponent');
    });
  });

  it ('should expose my title', () => {
    expect(controller.myTitle).toBeDefined();
    expect(controller.myTitle).toBe('Testing');
  });
});