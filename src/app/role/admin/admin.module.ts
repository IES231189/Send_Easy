import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AdminAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
