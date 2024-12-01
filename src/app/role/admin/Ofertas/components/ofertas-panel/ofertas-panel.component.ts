import { Component } from '@angular/core';

interface NavOption {
  label: string;
  route: string;
}

@Component({
  selector: 'app-ofertas-panel',
  templateUrl: './ofertas-panel.component.html',
  styleUrls: ['./ofertas-panel.component.css']
})
export class OfertasPanelComponent {

  adminNavOptions: NavOption[] = [

    { label: 'Ver todas las ofertas', route: 'admin/ofertas/all' },
    { label: 'Agregar Ofertas', route: '/admin/ofertas/add' },
  ];

}
