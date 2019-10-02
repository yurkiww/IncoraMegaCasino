import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ProductService } from 'src/services/product.service';
import {
  getProducts,
  addNewProduct,
  getProductsSuccess,
} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((res) => {
            console.log('Result of effect:');
            console.log(res);
            return getProductsSuccess({ products: res });
          })
        )
      )
    )
  );
}
