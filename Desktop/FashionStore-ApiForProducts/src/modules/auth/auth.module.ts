import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/services/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/store/effects/user.effect';
import { StorageService } from 'src/services/storage.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    EffectsModule.forRoot([UserEffects, StorageService]),
  ],
  providers: [UserService],
})
export class AuthModule {}
