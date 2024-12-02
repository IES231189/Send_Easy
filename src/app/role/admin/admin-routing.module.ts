import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { OfertasPanelComponent } from './Ofertas/components/ofertas-panel/ofertas-panel.component';


const routes: Routes = [
  { path: '', component: AdminAppComponent,
    children:[
      {path:'ofertas' , loadChildren:() =>import('./Ofertas/ofertas.module').then(m=>m.OfertasModule)},
      {path:'productos' , loadChildren :()=>import('../admin/Productos/productos.module').then(m =>m.ProductosModule)}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
