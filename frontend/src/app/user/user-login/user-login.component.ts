import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  get usernameValidator(){
    return this.loginForm.get('username') as FormControl;
  }

  get passwordValidator(){
    return this.loginForm.get('password') as FormControl;
  }

  onLogin(){
    console.log(this.loginForm.value);
    const token = this.authService.authUser(this.loginForm.value);
    if(token){
      localStorage.setItem('token', token.username)
      this.alertify.success('Congrats, You are successfully login');
      this.router.navigate(['/']);
    } else {
    console.log(this.loginForm.value);
      this.alertify.error('You are not successfully login');
    }

  }



}
