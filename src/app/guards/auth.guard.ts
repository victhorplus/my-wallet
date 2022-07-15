import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.isLogged() && state.url != "/login"){
      return true;
    }
    else if(this.isLogged() && state.url == "/login"){
      this.router.navigateByUrl("payments");
      return true;
    }
    else if(!this.isLogged() && state.url != "/login"){
      this.router.navigateByUrl("");
      return false;
    }
    return true;
  }

  isLogged(): boolean{
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('token');

    if(!user || !token) return false;
    if(user == token) return true;
    
    this.userService.logout();
    return false;
  }
}
