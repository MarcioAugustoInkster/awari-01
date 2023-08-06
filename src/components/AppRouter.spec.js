import routerConfig from './AppRouter';

describe('AppRouter routes', () => {
  it('will create routes', () => {
    const routes = routerConfig.routes.length;
    expect(routes).toBeGreaterThan(0);
  });
});
