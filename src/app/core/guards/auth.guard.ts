// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated 
    const isAuthenticated = !!localStorage.getItem('userData');
    // debugger
    if (route.routeConfig &&route.routeConfig?.path&& route.routeConfig?.path?.indexOf('auth')>=0){
      if (isAuthenticated) {
        this.router.navigate(['movie']);
        return false; // User is authenticated, allow access
      } else {
        // User is not authenticated, redirect to login page
        return true;
      }
    }else{
      if (isAuthenticated) {
        return true; // User is authenticated, allow access
      } else {
        this.router.navigate(['auth/login']); // User is not authenticated, redirect to login page
        return false;
      }
    }
    console.log(localStorage.getItem('userdata'))
    
  }
}
