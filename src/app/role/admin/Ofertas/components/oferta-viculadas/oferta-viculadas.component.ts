import { Component, OnInit } from '@angular/core';
import { OfertaProductoService } from '../../services/oferta-producto.service';

@Component({
  selector: 'app-oferta-viculadas',
  templateUrl: './oferta-viculadas.component.html',
  styleUrls: ['./oferta-viculadas.component.css']
})
export class OfertaViculadasComponent implements OnInit {

  ofertas: any[] = [];
  columns = [
    { name: 'nombre_producto', type: 'text', key: 'nombre_producto' },
    { name: 'precio_original', type: 'number', key: 'precio' },
    { name: 'imagen_url', type: 'image' },
    { name: 'nombre_oferta', type: 'text', key: 'nombre_oferta' },
    { name: 'fecha_inicio', type: 'text', key: 'fecha_inicio' },
    { name: 'descuento_aplicado', type: 'number' },
    { name: 'precio_con_descuento', type: 'number' },
    { name: 'fecha_fin', type: 'text', key: 'fecha_fin' },
    { name: 'descuento', type: 'number', key: 'precio' },
    { name: 'Eliminar', type: 'button', action: 'delete' }
  ];
  

  selectedOferta: any = null;  // Para almacenar la oferta seleccionada para eliminar
  isModalOpen: boolean = false; // Para controlar la visibilidad del modal

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
    this.selectedOferta = oferta;
    this.isModalOpen = true; // Abre el modal para confirmar la eliminación
  }

  onConfirmDelete(): void {
    console.log('Confirmar eliminación de:', this.selectedOferta);
    if (this.selectedOferta) {
      const { id_producto, id_oferta } = this.selectedOferta; // Cambiado para coincidir con los datos de la API
      this.ofertasService.deleteOfertaProducto(id_producto, id_oferta).subscribe(
        () => {
          this.ofertas = this.ofertas.filter(
            oferta => oferta.id_producto !== id_producto || oferta.id_oferta !== id_oferta
          );
          this.isModalOpen = false; // Cierra el modal tras eliminar
        },
        (error) => {
          console.error('Error al eliminar la oferta:', error);
        }
      );
    }
  }


  onCancelDelete(): void {
    this.isModalOpen = false; // Cierra el modal sin realizar ninguna acción
  }
}

