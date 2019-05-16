import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { ProductListComponent } from "./product-list/product-list.component";
import {UserProductsComponent} from "./user-products/user-products.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'productList',
        component: ProductListComponent
      },
      {
        path:'userProduct',
        component: UserProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
