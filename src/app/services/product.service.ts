import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userObject: any;
  url: string;

  constructor(
    private http: HttpClient,
    public loginservice:LoginService
  ) {

    this.url = this.loginservice.url;
    this.userObject.user = this.loginservice.USER_OBJECT;
  }


  getUserProducts(){

    return this.http.get<any>(this.url+`users/listMyOrders/${this.userObject.user.id}`)
      .pipe(map(products => {
        if (products) {
          return products;
        }
      }));

  }

  requestProducts(obj){

    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(this.url+`orders/save/${this.userObject.user.id}`,obj,options)
      .pipe(map(products => {
        if (products) {
          return products;
        }
      }));

  }

  getProduct(){

    return this.http.get<any>(this.url+`products`)
      .pipe(map(products => {
        if (products) {
          return products;
        }
      }));

  }
}
