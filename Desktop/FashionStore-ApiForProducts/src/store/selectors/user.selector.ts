import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/index';
import { IUserState } from '../reducers/user.reducers';

const selectUsers = (state: AppState) => state.user;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.user
);

// export const selectSelectedUser = createSelector(
//   selectUsers,
//   (state: IUserState) => state.selectedUser
// );
