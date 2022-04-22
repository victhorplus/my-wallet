import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';
import { encrypt } from 'src/app/util/crypto';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = 'http://localhost:3000';
  user: User;

  constructor(private http: HttpClient) { }

  login(user: Partial<User>): Observable<User>{
    let url = `${this.api}/account?email=${user.email}&&password=${user.password}`
    return this.http.get<User>(url).pipe(
      map( result => {
        if(result['length']){
          delete result[0].password;
          return result[0];
        }
        return {}
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  storageUser(user: User){
    this.user = user;
    let userJSON = JSON.stringify(this.user);
    localStorage.setItem('user', userJSON);
    localStorage.setItem('token', encrypt(userJSON));
  }
}
