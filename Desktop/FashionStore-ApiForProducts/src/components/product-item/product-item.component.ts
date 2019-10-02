import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductItem } from 'src/interfaces/product-item';
import { IProduct } from 'src/interfaces/products.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: IProduct;

  constructor() {}
  @Output() addToCart = new EventEmitter();
  addToCartHandler = () => {
    this.addToCart.emit(this.item);
  };
  ngOnInit() {}
}
