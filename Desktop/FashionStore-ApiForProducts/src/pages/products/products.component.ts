import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/product.interface';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/store/actions/product.actions';
import { AppState } from 'src/store/reducers/index';
import { IProductItem } from 'src/interfaces/product-item';
import { IPagination } from 'src/interfaces/pagination';
import { CartService } from 'src/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  cartProducts: IProductItem[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.store.select('products').subscribe((red) => {
      this.products = red.products;
    });
  }
  ngOnInit() {
    this.store.dispatch(getProducts());
    this.cartService.products = this.cartProducts;
  }
  onPageChanged(e: IPagination) {
    console.log(e);
  }

  addToCart = (product: IProductItem) => {
    this.cartProducts.push(product);
    this.cartService.products = this.cartProducts;
  };
}
