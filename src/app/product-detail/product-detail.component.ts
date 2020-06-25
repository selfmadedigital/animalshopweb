import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  isSuccessful = false;
  errorMessage = '';
  product: Product;
  private routeSub: Subscription;
  quantity: number;


  constructor(public productService: ProductService, private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productService.findById(params.id).subscribe(data => {
        console.log(data);
        this.product = data;
      });
    });
  }

  orderProduct() {
    this.orderService.create(this.quantity, this.product).subscribe(
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
