import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as env from 'src/environments/environment';
import { IProduct } from 'src/interfaces/products.interface';

@Injectable()
export class ProductsService {
  API_URL = env.environment.API_URL;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}/products`);
  }
  public getCurrentProduct(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}/products/${id}`);
  }
}
