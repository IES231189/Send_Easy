import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { elementAt } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router= inject(Router);
  const user = authService.getUser();

  if(user && user.role === 'admin' && route.routeConfig?.path === 'admin'){
    return true;
  }else if(user && user.role === 'user' && route.routeConfig?.path ==='user'){
    return true;
  }else{
    router.navigate(['/unauthorized']);
    return false;
  }
};
