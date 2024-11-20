import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponentsComponent } from './components/login-components/login-components.component';


@NgModule({
  declarations: [
   LoginComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ] ,
  exports:[
    LoginComponentsComponent
  ]
})
export class AuthModule { }
