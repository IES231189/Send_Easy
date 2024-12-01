import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ofertas } from '../models/ofertas';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class OfertaService {
  private apiUrl = 'http://localhost:4000/api/ofertas/'; // URL de tu API

  constructor(private http: HttpClient) {}

 /* getOfertas() {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get<Ofertas[]>('http://localhost:4000/api/ofertas/', { headers });
  }
*/


getOfertas(): Observable<Ofertas[]> {
  return this.http.get<Ofertas[]>(this.apiUrl);
}
  // Crear nueva oferta
  createOferta(oferta: Ofertas): Observable<Ofertas> {
    return this.http.post<Ofertas>(this.apiUrl, oferta);
  }

  // Actualizar una oferta existente
  updateOferta(oferta: Ofertas): Observable<Ofertas> {
    return this.http.put<Ofertas>(`${this.apiUrl}/${oferta.id_oferta}`, oferta);
  }

  // Eliminar una oferta
  deleteOferta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
