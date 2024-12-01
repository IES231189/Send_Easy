import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasPanelComponent } from './components/ofertas-panel/ofertas-panel.component';
import { TableComponent } from '../../../shared/Table/table/table.component';
import { TableCrudComponent } from './components/table-crud/table-crud.component';

const routes: Routes = [
  {path:'' , component:OfertasPanelComponent,
    children:[
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      {path:'add' , component: TableCrudComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
