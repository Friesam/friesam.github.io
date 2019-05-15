import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
form: FormGroup;

  constructor(protected router: Router) {}

  ngOnInit(): void{
      this.form = new FormGroup({
      'email': new FormControl('', Validators.required)
    });
  }

  get email() { return this.form.get('email'); }

  cancel(){
    console.log("Cancel this sign up")
  }

  login(){
    console.log("logged good")
  }

  coachReg(){
    console.log("proceed")
    this.toCoachRegister()
  }
  private toCoachRegister() {
    this.router.navigateByUrl('/roles/details')
  }
}
