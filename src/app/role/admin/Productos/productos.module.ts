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
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosPanelComponent,
    ProductosComponent,
    FormProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CategoriesModule
  ],
  providers:[ProductosService]

})
export class ProductosModule { }
