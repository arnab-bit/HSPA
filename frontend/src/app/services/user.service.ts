import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user){
  let users = [];
  if( localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user, ...users];
  }
  localStorage.setItem('Users',JSON.stringify(users));
}

}
