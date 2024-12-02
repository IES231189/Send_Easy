import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPanelComponent } from './components/productos-panel/productos-panel.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoriesModule } from '../Categories/categories.module';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos.service';


@NgModule({
  declarations: [
    ProductosPanelComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule,
    SharedModule,
    CategoriesModule
  ],
  providers:[ProductosService]

})
export class ProductosModule { }
