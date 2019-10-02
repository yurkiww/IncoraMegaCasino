import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartProductItem } from 'src/interfaces/cart-product-item';
import { CartService } from 'src/services/cart.service';
import { IProductItem } from 'src/interfaces/product-item';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
})
export class CartProductItemComponent implements OnInit {
  @Input() item: ICartProductItem;
  @Output() OnChanged = new EventEmitter();
  products: ICartProductItem[] = [];
  selectedOption = 1;
  constructor(private cartService: CartService) {}
  sum: number;
  onChange() {
    this.sum = this.item.price * this.selectedOption;
    this.OnChanged.emit(this.sum);
  }

  removeItem(product: ICartProductItem) {
    // const index = this.products.findIndex((pr) => {
    //   return product.brand === pr.brand;
    // });
    // if (index >= 0) {
    //   this.products = this.products.splice(index, 1);
    // }
  }
  ngOnInit() {
    this.onChange();
    //this.products = this.cartService.products;
  }
}
