import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'https://animalshopapi.selfmade.site/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public findById(id: string): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + id);
  }

  public create(product: Product) {
    return this.http.post<User>(this.productsUrl, product);
  }
}
