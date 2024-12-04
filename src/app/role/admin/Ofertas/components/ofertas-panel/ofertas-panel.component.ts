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

    { label: 'Vincular Ofertas', route: '/admin/ofertas/all' },
    { label: 'ofertas', route: '/admin/ofertas/add' },
  ];

}
