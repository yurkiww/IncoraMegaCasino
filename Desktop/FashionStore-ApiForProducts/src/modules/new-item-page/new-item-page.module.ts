import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemPageComponent } from 'src/pages/products/new-item-page/new-item-page.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: NewItemPageComponent,
  },
];

@NgModule({
  declarations: [NewItemPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [NewItemPageComponent],
  providers: [],
})
export class NewItemPageModule {}
