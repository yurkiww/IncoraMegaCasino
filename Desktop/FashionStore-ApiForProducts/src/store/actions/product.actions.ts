import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/interfaces/product.interface';

export const getProducts = createAction('[Product] Get Products');
export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ products: IProduct[] }>()
);

export const addNewProduct = createAction(
  '[Product] Add New Product',
  props<IProduct>()
);
