import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService, private authService: AuthService) {
  }

  ngOnInit() {

    this.orderService.findAllByUser('user').subscribe(data => {
      this.orders = data;
    });
  }
}
