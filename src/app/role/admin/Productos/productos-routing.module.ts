import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPanelComponent } from './components/productos-panel/productos-panel.component';
import { CategoriaFormComponent } from '../Categories/components/form-categories/form-categories.component';
import { TableCategoriesComponent } from '../Categories/components/table-categories/table-categories.component';

const routes: Routes = [
  {
    path: '', component: ProductosPanelComponent,
    children: [
      {path:'categories' , loadChildren: () =>import('../Categories/categories.module').then(m=>m.CategoriesModule)},
      //{path:'addCategories' , component:CategoriaFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
