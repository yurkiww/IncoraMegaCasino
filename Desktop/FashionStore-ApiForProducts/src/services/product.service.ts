import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL + '/products');
  }
  getProductById(id: number): Observable<IProduct> {
    console.log(this.API_URL + '/products' + id);
    return this.http.get<IProduct>(this.API_URL + '/products/' + id);
  }
}
