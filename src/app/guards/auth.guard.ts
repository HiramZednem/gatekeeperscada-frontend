import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = localStorage.getItem('autenticated') === 'true';

    if (isLoggedIn) {
      localStorage.removeItem('autenticated'); // Borra el valor en localStorage
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
      return false;
    }
  }
}
