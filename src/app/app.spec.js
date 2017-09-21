import MODULE_NAME from './app';

describe('App', () => {
  beforeEach(() => {
    angular.module(MODULE_NAME, []);;
  });

  it('should expose my app', () => {
    const name = angular.module(MODULE_NAME).name;

    expect(name).toEqual(MODULE_NAME);
  });
});