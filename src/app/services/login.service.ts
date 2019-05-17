import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from  "@angular/common/http";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url= "http://localhost:8080/";

  public USER_OBJECT: object;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(email: string, password: string) {

    let options = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      }),
      params: new  HttpParams()
        .set('email', email)
        .set('password', password)
    };

    return this.http.get<any>(this.url+"user/login",options)
      .pipe(map(user => {
        this.USER_OBJECT = user;
        return this.USER_OBJECT;
      }))
  }


}
