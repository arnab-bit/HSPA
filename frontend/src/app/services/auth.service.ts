import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any){
  let usersArray = [];
  if(localStorage.getItem('Users')){
    usersArray = JSON.parse(localStorage.getItem('Users'));
  }
  return usersArray.find(param => param.userName === user.username && param.password === user.password);
}

}
