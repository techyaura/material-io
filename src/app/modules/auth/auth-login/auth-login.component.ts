import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // auth check after submit
  signIn(): void {
    this.router.navigate(['/home']);
  }

}
