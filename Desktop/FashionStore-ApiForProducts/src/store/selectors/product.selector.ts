import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { IProductsState } from '../reducers/product.reducers';

const selectProducts = (state: AppState) => state.products;

export const selectProductsList = createSelector(
  selectProducts,
  (state: IProductsState) => state.products
);
