// import { initialUserState, IUserState } from 'src/store/state/user.state';
import { login, register } from 'src/store/actions/user.actions';
import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/interfaces/user.interface';

export interface IUserState {
  user: IUser;
}

export const initialUserState: IUserState = {
  user: null,
};

const loginUser = createReducer(
  initialUserState,
  on(login, (state) => state),
  on(register, (state) => state)
);

export function reducer(initialUserState, action) {
  console.log('Reducer works!');
  console.log(initialUserState);
  console.log(action);
  return loginUser(initialUserState, action);
}
