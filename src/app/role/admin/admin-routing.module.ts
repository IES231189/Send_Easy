import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { OfertasPanelComponent } from './Ofertas/ofertas-panel/ofertas-panel.component';
 // Componente principal del módulo

const routes: Routes = [
  { path: '', component: AdminAppComponent,
    children:[
      {path:'ofertas' , component:OfertasPanelComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
