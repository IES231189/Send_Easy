import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:4000/api/productos';  // Asegúrate de que la URL sea la correcta
  private recientes = 'http://localhost:4000/api/productos/recent'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }


  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateProductoConImagen(producto: Producto, archivoImagen: File | null): Observable<Producto> {
    const formData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio.toString());
    formData.append('stock', producto.stock.toString());
    formData.append('id_categoria', producto.id_categoria.toString());

    if (archivoImagen) {
      formData.append('imagen', archivoImagen);
    }

    return this.http.put<Producto>(`${this.apiUrl}/${producto.id_producto}`, formData);
  }

  getProductosrecet(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.recientes);
  }



}


