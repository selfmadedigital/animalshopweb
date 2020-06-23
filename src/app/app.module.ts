import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagmentComponent } from './product-managment/product-managment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    OrderListComponent,
    ProductDetailComponent,
    ProductManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
