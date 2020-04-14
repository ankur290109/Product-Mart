import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user$ = new Subject<User>();
    constructor() { }

  login(email: string, password: string) {
    const logincredentials ={email,password};
    console.log('login credentials',logincredentials);
    return of ({logincredentials})
}

logout(){
  //remove user from subject
  this.setUser(null);
  console.log("user has been logged out!");
}
get user(){
 return this.user$.asObservable();
}
register(user:any) {

  //make a api call to save user in database
  //update the user subject
  this.setUser(user)
  console.log(`registered user successfully`, user);
  return of (user);
}
  setUser(user: any) {
    return this.user$.next(user);
  }
}
