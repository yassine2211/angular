import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  user: any = {}

  test=true

  constructor(private router:Router , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:[''],

    })
  }

  navigate(){
    this.router.navigate(["/sign-up/"])
  }

  login(){
    
  }

}
