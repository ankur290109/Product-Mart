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
get user(){
 return this.user$.asObservable();
}
register(user:any) {
  this.user$.next(user);
  console.log(`registered user successfully`, user);
  return of (user);
}
}
