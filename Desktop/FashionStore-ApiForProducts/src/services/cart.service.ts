import { Injectable } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';

@Injectable()
export class CartService {
  products: IProductItem[] = [];
  constructor() {}
}
