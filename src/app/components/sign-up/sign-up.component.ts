import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm !: FormGroup
  user: any = {}

  test=true

  constructor(private router:Router , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:['',[Validators.minLength(3),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:[''],
      cpassword:['']

    },{
      validators:MustMatch("password","cpassword")
    })
  }

  signup(){
    
  }

}
