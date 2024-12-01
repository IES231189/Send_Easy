import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';

import { SharedModule } from '../../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfertasPanelComponent } from './components/ofertas-panel/ofertas-panel.component';
import { TableCrudComponent } from './components/table-crud/table-crud.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OfertaService } from './services/oferta.service';
import { FormOfertasComponent } from './components/form-ofertas/form-ofertas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfertasPanelComponent,
    TableCrudComponent,
    FormOfertasComponent,
    FormOfertasComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OfertaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class OfertasModule { }
