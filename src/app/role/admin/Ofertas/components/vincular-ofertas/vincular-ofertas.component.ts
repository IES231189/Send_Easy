import { Component, OnInit } from '@angular/core';
import { OfertaProductoService } from '../../services/oferta-producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vincular-ofertas',
  templateUrl: './vincular-ofertas.component.html',
  styleUrl: './vincular-ofertas.component.css'
})
export class VincularOfertasComponent implements OnInit {
  productos: any[] = [];
  ofertas: any[] = [];
  selectedProducto: string | null = null;
  selectedOferta: string | null = null;
  descuento: number | null = null; // Nuevo campo para descuento

  constructor(
    private ofertaProductoService: OfertaProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ofertaProductoService.getProductos().subscribe((data) => {
      this.productos = data;
    });

    this.ofertaProductoService.getOfertas().subscribe((data) => {
      this.ofertas = data;
    });
  }

  onSubmit(): void {
    if (this.selectedProducto && this.selectedOferta && this.descuento !== null) {
      const payload = {
        id_producto: this.selectedProducto,
        id_oferta: this.selectedOferta,
        descuento: this.descuento,
      };

      this.ofertaProductoService.createOfertaProducto(payload).subscribe(
        (response) => {
          alert('Oferta vinculada exitosamente.');
          this.router.navigate(['/admin/ofertas/ofertas-productos']);
        },
        (error) => {
          alert('Ocurrió un error al vincular la oferta.');
          console.error(error);
        }
      );
    } else {
      alert('Por favor selecciona un producto, una oferta y especifica el descuento.');
    }
  }
}
