import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !:FormGroup;
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname:[''],
      email:[''],
      address:[''],
      number:[''],
      ename:[''],
      password:[''],
      conpassword:['']
    })
  }
  signUp()
  {
    this.router.navigate(['/signin']);
  }

}
