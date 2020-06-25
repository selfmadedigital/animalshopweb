import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Order} from '../models/order';
import {User} from '../models/user';

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

  public create(pieces: number, product: Product) {
    const order = new Order(product, pieces);
    return this.http.post<User>(this.ordersUrl, order);
  }
}
