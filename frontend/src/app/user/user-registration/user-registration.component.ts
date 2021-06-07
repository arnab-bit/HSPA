import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('username', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value == fg.get('confirmPassword').value ? null :
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
    console.log(this.registrationForm);
  }

}
