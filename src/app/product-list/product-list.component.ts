import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public getProducts: Observable<ProductService>;
  constructor(
    public productService
  ) { }

  ngOnInit() {
    this.productService.getProducts().pipe(map(data=>data)).subscribe(data=>
      this.getProducts = data
    );
  }

}
