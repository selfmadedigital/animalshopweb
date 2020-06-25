import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesUrl: string;

  constructor(private http: HttpClient) {
    this.categoriesUrl = 'https://animalshopapi.selfmade.site/categories';
  }

  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
