import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from "../services/login.service";

import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errorResponse = false;
  error = '';
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get conrolsCheck() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.conrolsCheck.email.value, this.conrolsCheck.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.user = data;
          if( this.user.id ){
            this.router.navigate(['/dashboard']);
          }else {
            this.router.navigate(['/login']);

          }

        },
        error => {
          this.error = error;

          this.loading = false;
        });
  }

}
