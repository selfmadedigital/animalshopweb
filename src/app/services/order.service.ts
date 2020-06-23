import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl: string;

  constructor(private http: HttpClient) {
    this.ordersUrl = 'https://animalshopapi.selfmade.site/orders';
  }

  public findAllByUser(user: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }
}
