import { CanActivateFn } from '@angular/router';

export const canactiveGuard: CanActivateFn = (route, state) => {
  if (
    route.queryParams['account'] === 'admin' &&
    route.queryParams['password'] === '1234'
  ) {
    console.log(route);
    console.log(state);
    return true;
  }
  console.log(route);
  console.log(state);
  return false;
};
