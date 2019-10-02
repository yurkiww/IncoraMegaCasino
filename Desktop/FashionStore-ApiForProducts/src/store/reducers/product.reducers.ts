// import { initialProductsState } from 'src/store/state/product.state';
import {
  getProductsSuccess,
  addNewProduct,
  getProducts,
} from 'src/store/actions/product.actions';
import { createReducer, on, State } from '@ngrx/store';
import { IProduct } from 'src/interfaces/product.interface';

export interface IProductsState {
  products: IProduct[];
}

export const initialProductsState: IProductsState = {
  products: [],
};

const productReducer = createReducer(
  initialProductsState,
  on(addNewProduct, (state) => state),
  on(getProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  }),
  on(getProducts, (state) => state)
);

export function reducer(initialProductsState, action) {
  console.log('Reducer works!');
  console.log(initialProductsState);
  console.log(action);
  return productReducer(initialProductsState, action);
}
