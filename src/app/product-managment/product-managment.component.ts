import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-managment',
  templateUrl: './product-managment.component.html',
  styleUrls: ['./product-managment.component.scss']
})
export class ProductManagmentComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
