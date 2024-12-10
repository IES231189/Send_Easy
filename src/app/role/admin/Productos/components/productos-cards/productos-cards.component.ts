import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../model/producto';
@Component({
  selector: 'app-productos-cards',
  templateUrl: './productos-cards.component.html',
  styleUrl: './productos-cards.component.css'
})
export class ProductosCardsComponent {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductosrecet().subscribe((data) => {
      this.productos = data;
    });
  }

  editProducto(producto: Producto): void {
    console.log('Editar producto:', producto);
  }

}
