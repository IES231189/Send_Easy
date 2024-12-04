
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosCategoriasService {
  private apiUrlProductos = 'http://localhost:4000/api/productos';
  private apiUrlCategorias = 'http://localhost:4000/api/categories/';

  constructor(private http: HttpClient) {}

  // Obtener categorías
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCategorias);
  }

  // Crear un producto con imagen
  createProducto(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrlProductos, formData);
  }
}

