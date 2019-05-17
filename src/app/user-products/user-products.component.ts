import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  public getProducts: Observable<ProductService>;
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getUserProducts().pipe(data=> data).subscribe(data=>{
      this.getProducts = data.products;
      console.log(this.getProducts);
    }
    );
  }



}
