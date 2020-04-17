import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user$ = new Subject<User>();
    private apiUrl='/api/auth/';
    constructor(private httpClient:HttpClient) { }

  login(email: string, password: string) {
    const logincredentials ={email,password};
    console.log('login credentials',logincredentials);
    return this.httpClient.post<User>(`${this.apiUrl}login`,logincredentials).pipe(
      switchMap(foundUser=>{
        this.setUser(foundUser);
        console.log(`user login successfully`, foundUser);
        return of(foundUser);
      }),
      catchError(e=>{
        console.log(`Your Login details could not be verified Please try again`,e);
        return throwError(`Your Login details could not be verified.Please try again!`);
      })
    );
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
  return this.httpClient.post<User>(`${this.apiUrl}register`,user).pipe
  (
    switchMap(savedUser=>{
      this.setUser(savedUser);
      console.log(`user registered successfully`, savedUser);
      return of(savedUser);
      
    }),
    catchError(e=>{
      console.log(`server error occured`,e);
      return throwError(`Registration failed please contact to Admin`);
    })
  );
}
  setUser(user: any) {
    return this.user$.next(user);
  }
}
