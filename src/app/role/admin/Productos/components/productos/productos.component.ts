import { Component } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductosService } from '../../services/productos.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos: Producto[] = [];
  mostrarModal: boolean = false;
  productoSeleccionado: Producto | null = null;

  columnas = [
    {name:'id_producto' , type:'number'},
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'precio', type: 'number' },
    { name: 'stock', type: 'number' },
    { name: 'imagen_url', type: 'image' },
    { name: 'editar', type: 'button', action: 'edit' },
    {name:'eliminar' , type:'button' , action:'delete'}
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
    this.productoSeleccionado = { ...producto }; // Copia del producto para editar
    this.mostrarModal = true; // Muestra el modal
  }

  onDelete(producto: Producto) {
    console.log('Eliminar producto', producto);
    // Lógica para eliminar el producto
  }

  guardarCambios(productoEditado: Producto) {
    console.log('Producto editado:', productoEditado);
    // Lógica para actualizar el producto en el backend
    this.mostrarModal = false; // Cierra el modal
    this.cargarProductos(); // Recarga la lista de productos
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
