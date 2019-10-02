import { IProduct } from 'src/interfaces/product.interface';

export interface IProductsState {
  products: IProduct[];
}

export const initialProductsState: IProductsState = {
  products: null,
};
