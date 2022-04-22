import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  loginError: string;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(){
    let user: Partial<User> = this.loginForm.value;
    this.userService.login(user).subscribe( user => {
      if(Object.keys(user).length){
        this.loginForm.reset();
        this.userService.storageUser(user);
        this.route.navigateByUrl("payments");
        return;
      }
      this.loginError = "Usuário não encontrado";
    });
  }

}
