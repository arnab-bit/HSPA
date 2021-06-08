import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as alertify from 'alertifyjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: any = {};
  saveButton: boolean ;
  constructor(private userservice: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
    // this.registrationFormBuilder();
  }

  //------------------------
  //password and confirm password not matching issue using Form Builder
  //-----------------------

  // registrationFormBuilder() {
  //   this.registrationForm = this.fb.group({
  //     userName: [null, Validators.required],
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [null, [Validators.required, Validators.minLength(5)]],
  //     confirmPassword: [null, Validators.required],
  //     mobile: [null, [Validators.required, Validators.maxLength(10)]],
  //   }, {Validators : this.passwordMatchingValidator});
  // }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    { notmatched : true };
  }

  // -----------------------------------
  // getter method for all form controls
  // -----------------------------------

  get userNameValidator(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get emailValidator(){
    return this.registrationForm.get('email') as FormControl;
  }

  get passwordValidator(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPasswordValidator(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobileValidator(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.saveButton = true;
    if(this.registrationForm.valid){
      this.user = Object.assign(this.user, this.registrationForm.value)
      this.userservice.addUser(this.user);
      this.registrationForm.reset();
      this.saveButton = false;
      this.alertify.success('Congrats, You are successfully registered');
    } else {
      this.alertify.error('Please provide the required fields');
    }
  }

  // addUser(user){
  //   let users = [];
  //   if( localStorage.getItem('Users')){
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   }
  //   localStorage.setItem('Users',JSON.stringify(users));
  // }

}
