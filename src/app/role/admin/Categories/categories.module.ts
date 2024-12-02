import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaFormComponent } from './components/form-categories/form-categories.component';
import { TableCategoriesComponent } from './components/table-categories/table-categories.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoriasRoutingModule } from './categories.routing.module';



@NgModule({
  declarations: [
    CategoriaFormComponent,
    TableCategoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoriasRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CategoriesModule { }
