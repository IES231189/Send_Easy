import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCategoriesComponent } from './components/table-categories/table-categories.component';
import { FormOfertasComponent } from '../Ofertas/components/form-ofertas/form-ofertas.component';
import { CategoriaFormComponent } from './components/form-categories/form-categories.component';

const routes: Routes = [
  {path:'' , component:TableCategoriesComponent,
    children:[
      {path:'addCategories' , component:CategoriaFormComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
