// import { inject, Injectable } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';


// export const AuthGuard: CanActivateFn = (route, state) => {
//  const router = inject(Router)
//  const token = localStorage.getItem('token');
//  if(token != null) {
//   return true;
//   } else {
//    router.navigate(['/login']);
//    return false;
//  }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const expectedRole = route.data['role'];
    const userRole = this.authService.getUserRole();

    if (userRole !== expectedRole) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
