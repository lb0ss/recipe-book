import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['auth/signin']);
      return false;
    }
    return true;
  }

  // canLoad guard for lazy loading - temporarily disabled

  // canLoad(route: Route) {
  //    if (!this.authService.isAuthenticated()) {
  //     this.router.navigate(['auth/signin']);
  //     return false;
  //    }
  //    return true;
  // }

}
