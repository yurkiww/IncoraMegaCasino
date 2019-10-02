import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[User] Login',
  props<{ email: string; password: string; remember: boolean }>()
);
export const loginSuccess = createAction(
  '[User] Login Success'
  // props<{ token: string }>()
);
export const loginFailure = createAction('[User] Login Failure');

export const logout = createAction('[User] Logout');
export const register = createAction(
  '[User] Register',
  props<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    state: string;
    zip: string;
    role: string;
  }>()
);
export const registerSuccess = createAction('[User] Register Success');
export const registerFailure = createAction('[User] Register Failure');
