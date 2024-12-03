import { Component } from '@angular/core';

interface NavOption {
  label: string;
  route: string;
}


@Component({
  selector: 'app-productos-panel',
  templateUrl: './productos-panel.component.html',
  styleUrl: './productos-panel.component.css'
})
export class ProductosPanelComponent {

  productsNavOptions: NavOption[] = [

    { label: 'Agregar producto', route: '/admin/productos/add' },
    { label: 'Ver Productos', route: '/admin/productos/all' },
    { label: 'Categorias', route: '/admin/productos/categories' },
    { label: 'Recientes', route: '/admin/productos/' },
  ];

}
