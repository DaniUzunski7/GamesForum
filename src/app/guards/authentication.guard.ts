import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../user/auth.service";

export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router)

    if (authService.currUser()?.userName){
        return true
    } else {
        return router.navigate(['/login']);
    }

};