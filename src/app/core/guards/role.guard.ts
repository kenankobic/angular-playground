import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let roles = route.data['canView'];

        if (!roles || roles.length === 0 || this.authService.hasAnyRole(roles))
            return true;

        this.router.navigate(['']);

        return false;
    }
}