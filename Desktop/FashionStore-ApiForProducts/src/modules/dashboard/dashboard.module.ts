import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from 'src/components/header/header.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/components/modal/modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ModalComponent,
  ]
})
export class DashboardModule { }
