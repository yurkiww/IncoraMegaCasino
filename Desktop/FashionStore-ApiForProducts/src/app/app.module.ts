import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { AccountSettingsModule } from 'src/modules/account-settings/account-settings.module';
import { CartModule } from 'src/modules/cart/cart.module';

import { FormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import store from 'src/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/store/effects/user.effect';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { AuthGuardService } from 'src/services/authguard.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken } from '@angular/core';
import { ProductEffects } from 'src/store/effects/product.effect';
import { AppState } from 'src/store/reducers/index';
import { CartService } from 'src/services/cart.service';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered Reducer'
);
export function getReducers() {
  return {
    ...store,
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProductsModule,
    AccountSettingsModule,
    FormsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    CartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuardService,
    { provide: REDUCER_TOKEN, useFactory: getReducers },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
