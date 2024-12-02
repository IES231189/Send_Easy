import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPanelComponent } from './components/productos-panel/productos-panel.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoriesModule } from '../Categories/categories.module';


@NgModule({
  declarations: [
    ProductosPanelComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    CategoriesModule
  ]
})
export class ProductosModule { }
