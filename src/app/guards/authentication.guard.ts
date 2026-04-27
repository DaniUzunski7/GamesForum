import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../user/auth.service";

export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router)

    const user = authService.currUser();

  if (user) {
    return true;
  }

  return router.navigate(['/login']);
  
};