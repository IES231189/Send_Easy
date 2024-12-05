import { Component, OnInit } from '@angular/core';
import { OfertaProductoService } from '../../services/oferta-producto.service';

@Component({
  selector: 'app-oferta-viculadas',
  templateUrl: './oferta-viculadas.component.html',
  styleUrl: './oferta-viculadas.component.css'
})
export class OfertaViculadasComponent implements OnInit {

  ofertas: any[] = [];
  columns = [
    { name: 'nombre_producto', type: 'text', key: 'nombre_producto' },
   // { name: 'descripcion_producto', type: 'text', key: 'descripcion_producto' },
    { name: 'precio', type: 'number', key: 'precio' },
    {
      name: 'imagen_url', type:'image'},
    { name: 'nombre_oferta', type: 'text', key: 'nombre_oferta' },
    //{ name: 'descripcion_oferta', type: 'text', key: 'descripcion_oferta' },
    { name: 'fecha_inicio', type: 'text', key: 'fecha_inicio' },
    { name: 'fecha_fin', type: 'text', key: 'fecha_fin' },
    { name: 'Eliminar', type: 'button', action: 'delete' },
  ];


  constructor(private ofertasService: OfertaProductoService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasProductos().subscribe((data) => {
      this.ofertas = data;
    });
  }

  onEdit(oferta: any): void {
    console.log('Editar:', oferta);
    // Lógica de edición
  }

  onDelete(oferta: any): void {
    console.log('Eliminar:', oferta);
    // Lógica de eliminación
  }

}
