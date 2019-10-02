import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from 'src/components/account-settings/account-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user.service';

const routes: Route[] = [
  {
    path: '',
    component: AccountSettingsComponent
  }
];
@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [UserService]
})
export class AccountSettingsModule {}
