import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm= new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private router:Router, private authService:AuthService) { 
    console.log('userForm',this.userForm);
  }

  register(){
    const user=this.userForm.getRawValue();
    this.authService.register(user).subscribe(s=>this.router.navigate(['/login']))
  }
  ngOnInit() {
  }

}
