import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from 'src/services/authguard.service';
import { ProductInfoComponent } from 'src/pages/product-info/product-info.component';

// const productRoutes: Routes = [
//   { path: 'details', component: ProductInfoComponent }
// ];

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  //НЕ ЗАБУДЬ ВИДАЛИТИ ЦЕЙ РОУТ!!!
  {
    path: 'product-info',
    component: ProductInfoComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/modules/products/products.module').then(
            (m) => m.ProductsModule
          )
      },
      {
        path: 'products/:id',
        component: ProductInfoComponent
      },
      {
        path: 'account',
        loadChildren: () =>
          import('src/modules/account-settings/account-settings.module').then(
            (m) => m.AccountSettingsModule
          )
      },
      {
        path: 'new-item',
        loadChildren: () =>
          import('src/modules/new-item-page/new-item-page.module').then(
            (m) => m.NewItemPageModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/modules/cart/cart.module').then((m) => m.CartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
