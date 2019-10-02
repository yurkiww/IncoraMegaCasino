// import { reducerUser } from '../reducers/user.reducers';
// import { reducerProduct } from '../reducers/product.reducers';
import * as fromUser from '../reducers/user.reducers';
import * as fromProduct from '../reducers/product.reducers';
export class AppState {
  user: fromUser.IUserState;
  products: fromProduct.IProductsState;
}
const store = {
  user: fromUser.reducer,
  products: fromProduct.reducer,
};
export default store;
