import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/pages/cart/cart.component';
import { Route, RouterModule } from '@angular/router';
import { CartProductItemComponent } from 'src/components/cart-product-item/cart-product-item.component';
import { CartPriceDetailsComponent } from 'src/components/cart-price-details/cart-price-details.component';
import { FormsModule } from '@angular/forms';
import { ModalPlaceOrderComponent } from 'src/components/modal-place-order/modal-place-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/services/cart.service';

const routes: Route[] = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [
    CartComponent,
    CartProductItemComponent,
    CartPriceDetailsComponent,
    ModalPlaceOrderComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [
    CartComponent,
    CartPriceDetailsComponent,
    ModalPlaceOrderComponent,
    CartProductItemComponent,
  ],
  providers: [CartService],
})
export class CartModule {}
