import { Component } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [];
  mostrarModal: boolean = false;
  productoSeleccionado: Producto | null = null;
  mostrarModalEliminar: boolean = false;

  columnas = [
    { name: 'id_producto', type: 'number' },
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'precio', type: 'number' },
    { name: 'stock', type: 'number' },
    { name: 'imagen_url', type: 'image' },
    { name: 'editar', type: 'button', action: 'edit' },
    { name: 'eliminar', type: 'button', action: 'delete' }
  ];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(
      (response: Producto[]) => {
        this.productos = Array.isArray(response) ? response : [response];
        console.log('Productos cargados:', this.productos);
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  onEdit(producto: Producto) {
    console.log('Producto a editar:', producto);
    this.productoSeleccionado = { ...producto }; // Copiar los datos del producto seleccionado
    this.mostrarModal = true;  // Mostrar el modal de edición
    this.mostrarModalEliminar = false;  // Asegurarse de que el modal de eliminación esté oculto
  }

  onDelete(producto: Producto) {
    console.log('Producto seleccionado para eliminar:', producto);
    this.productoSeleccionado = producto; // Asignar el producto seleccionado para eliminar
    this.mostrarModalEliminar = true;  // Mostrar el modal de eliminación
    this.mostrarModal = false;  // Ocultar el modal de edición
  }

  /*
  guardarCambios(productoEditado: Producto) {
    console.log('Guardando cambios para el producto:', productoEditado);
    // Lógica para actualizar el producto en el backend
    this.productoService.updateProducto(productoEditado).subscribe(
      (response) => {
        console.log('Producto actualizado:', response);
        this.mostrarModal = false; // Cerrar el modal de edición
        this.cargarProductos(); // Recargar los productos
      },
      (error) => {
        console.error('Error al actualizar producto:', error);
      }
    );
  }


*/

guardarCambios(productoEditado: Producto & { archivoImagen?: File }) {
  console.log('Guardando cambios para el producto:', productoEditado);

  this.productoService.updateProductoConImagen(productoEditado, productoEditado.archivoImagen || null).subscribe(
    (response) => {
      console.log('Producto actualizado:', response);
      this.mostrarModal = false;
      this.cargarProductos();
    },
    (error) => {
      console.error('Error al actualizar producto:', error);
    }
  );
}






  confirmarEliminar() {
    console.log('Confirmando eliminación de producto:', this.productoSeleccionado);
    if (this.productoSeleccionado) {
      this.productoService.deleteProducto(this.productoSeleccionado.id_producto).subscribe(
        (response) => {
          console.log('Producto eliminado:', response);
          this.mostrarModalEliminar = false; // Cerrar el modal de eliminación
          this.cargarProductos(); // Recargar los productos
        },
        (error) => {
          console.error('Error al eliminar producto:', error);
        }
      );
    }
  }

  cancelarEliminar() {
    this.mostrarModalEliminar = false; // Cerrar el modal de eliminación
  }

  cerrarModal() {
    this.mostrarModal = false;  // Cerrar el modal de edición
  }
}
