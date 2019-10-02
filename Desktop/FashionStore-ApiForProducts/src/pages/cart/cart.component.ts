import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ICartProductItem } from 'src/interfaces/cart-product-item';
import { IPriceDetails } from 'src/interfaces/cart-price-details';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productItems: Array<ICartProductItem> = [
    {
      img:
        'https://images.express.com/is/image/expressfashion/0093_08218658_0058?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
      brand: 'Style Quotient Women Black Polka Dot Print Top',
      soldBy: 'Krislon Synthetics Pvt.Ltd',
      size: ['S', 'M', 'L', 'XL'],
      qty: [1, 2, 3, 4, 5],
      price: 16.99,
    },
    {
      img:
        'https://lsco.scene7.com/is/image/lsco/Levis/clothing/296550012-front-pdp.jpg?$regular_desktop$&id=VWUrL3&fmt=jpg&fit=constrain,1&wid=552&hei=443',
      brand: 'Levis Men Olive Green & Blue Solid Denim Trucker Jacket',
      soldBy: 'Mayazen',
      size: ['S', 'M', 'L', 'XL'],
      qty: [1, 2, 3, 4, 5],
      price: 34.99,
    },
  ];
  cartPrices: Array<IPriceDetails> = [
    {
      bagTotal: 0,
      bagDiscount: 0,
      orderTotal: 0,
      delivery: 'FREE',
      total: 0,
    },
  ];
  constructor() {}
  sum: number;
  receiveSum($event) {
    // let total: number = this.sum;
    //this.sum = 0;
    this.sum += $event;
  }

  ngOnInit() {}
}
