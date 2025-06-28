import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../auth-service';
import { ProtectedRoute } from './protected-route';

export const adminAccessGuard: CanActivateFn = (route: ProtectedRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated) {
    return true;
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/login']);
    return false;
  }
};