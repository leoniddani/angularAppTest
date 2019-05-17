import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public Form: FormGroup;

  public getProducts: Observable<ProductService>;
  public requestForm: any;
  constructor(
    private formBuilder: FormBuilder,
    public productService : ProductService
  ) { }


  get conrolsCheck() { return this.Form.controls; }

  ngOnInit() {

    this.Form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.productService.getProduct().pipe(map(data=>data)).subscribe(data=>{
      this.getProducts = data;
      console.log(this.getProducts);
    }
    );
  }

  makeRequest(){

    this.productService.requestProducts(this.conrolsCheck).subscribe(data=>{
      console.log(data);
    });
  }

}
