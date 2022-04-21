import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { encrypt, decrypt } from 'src/app/util/crypto';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.isLogged())
      return true;
    
    this.router.navigateByUrl("");
    return false;
  }

  isLogged(): boolean{
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('token');

    if(!user || !token) return false;
    if(encrypt(user) == token) return true;
    
    return false;
  }
}
