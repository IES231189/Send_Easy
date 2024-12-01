import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { OfertasPanelComponent } from './Ofertas/components/ofertas-panel/ofertas-panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { OfertasModule } from './Ofertas/ofertas.module';



@NgModule({
  declarations: [
    AdminAppComponent,
    SidebarComponentComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule,
    OfertasModule
  ]
})
export class AdminModule { }
