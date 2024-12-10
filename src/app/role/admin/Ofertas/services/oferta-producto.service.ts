import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Hace que este servicio esté disponible en toda la aplicación
})
export class OfertaProductoService {
  // URL para obtener los productos
  private productosUrl = 'http://localhost:4000/api/productos';
  // URL para obtener las ofertas
  private ofertasUrl = 'http://localhost:4000/api/ofertas';

    ///private ofertaProducto = 'http://localhost:4000/api/verOfertas';

  // tabla-producto-oferta enspoints

  private ofertaProducto = 'http://localhost:4000/api/verOfertas'

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los productos desde el backend.
   * @returns Observable con la lista de productos.
   */
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.productosUrl);
  }

  /**
   * Obtiene todas las ofertas desde el backend.
   * @returns Observable con la lista de ofertas.
   */
  getOfertas(): Observable<any[]> {
    return this.http.get<any[]>(this.ofertasUrl);
  }

  getOfertasProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.ofertaProducto);
  }

  createOfertaProducto(data: { id_producto: string; id_oferta: string; descuento: number }) {
    return this.http.post('http://localhost:4000/api/verOfertas', data);
  }

  deleteOfertaProducto(idProducto: number, idOferta: number): Observable<void> {
    const url = `${this.ofertaProducto}/${idProducto}/${idOferta}`;
    return this.http.delete<void>(url);
  }

}
