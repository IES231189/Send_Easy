import { Component } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos: Producto[] = [];

  columnas = [
    {name:'id_producto' , type:'number'},
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'precio', type: 'number' },
    { name: 'stock', type: 'number' },
    { name: 'id_categoria', type: 'number' },
    { name: 'imagen_url', type: 'image' },
    { name: 'edit', type: 'button', action: 'edit' }
  ];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(
      (response: Producto[]) => {
        if (Array.isArray(response)) {
          this.productos = response;
          console.log(response)
        } else {
          this.productos = [response];
          console.log(response)
        }
      },
      (error) => {
        console.error('Error al cargar ofertas:', error);
      }
    );
  }

  onEdit(producto: Producto) {
    console.log('Editar producto', producto);
    // Implementar lógica de edición
  }

  onDelete(producto: Producto) {
    console.log('Eliminar producto', producto);
    // Implementar lógica de eliminación
  }
}
