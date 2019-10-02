import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { UserService } from 'src/services/user.service';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerSuccess,
  registerFailure,
} from '../actions/user.actions';
import { IUserHttp } from 'src/interfaces/user-http.interface';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private storageService: StorageService,
    private notificationsService: NotificationsService
  ) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.userService
          .loginUser(action.email, action.password, action.remember)
          .pipe(
            map((user) => {
              console.log(user.access_token);

              console.log('Запит на логінування');
              console.log(user);
              this.goToHomePage();
              action.remember
                ? this.storageService.setLocalToken(user.access_token)
                : this.storageService.setSessionToken(user.access_token);
              return loginSuccess();
            }),
            catchError((error) => of(loginFailure()))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap((action) =>
        this.userService
          .registerUser(
            action.firstName,
            action.lastName,
            action.email,
            action.password,
            action.city,
            action.state,
            action.zip,
            action.role
          )
          .pipe(
            map((user) => {
              this.notificationsService.success(
                'Successful registered!',
                'Click to close...',
                {
                  timeOut: 4000,
                  showProgressBar: true,
                  pauseOnHover: true,
                  clickToClose: true,
                }
              );
              console.log('Запит на реєстрацію');
              console.log(user);
              this.goToLoginPage();
              return registerSuccess();
            }),
            catchError((error) => {
              console.log(error);
              return of(registerFailure());
            })
          )
      )
    )
  );
  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
