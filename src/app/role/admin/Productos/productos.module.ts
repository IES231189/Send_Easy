import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPanelComponent } from './components/productos-panel/productos-panel.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoriesModule } from '../Categories/categories.module';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos.service';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductosComponent } from './components/edit-productos/edit-productos.component';


@NgModule({
  declarations: [
    ProductosPanelComponent,
    ProductosComponent,
    FormProductosComponent,
    EditProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CategoriesModule,
    FormsModule
  ],
  providers:[ProductosService]

})
export class ProductosModule { }
