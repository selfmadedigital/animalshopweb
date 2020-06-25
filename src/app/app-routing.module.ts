import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductManagmentComponent} from './product-managment/product-managment.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage', component: ProductManagmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
