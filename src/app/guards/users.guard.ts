import { CanActivateFn } from '@angular/router';

export const usersGuard: CanActivateFn = (route, state) => {
  return true;
};
