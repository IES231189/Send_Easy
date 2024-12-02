import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OfertaService } from '../../services/oferta.service';
import { Ofertas } from '../../models/ofertas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TableCrudComponent implements OnInit {
  ofertas: Ofertas[] = [];
  columns = [
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'fecha_inicio', type: 'text' },
    { name: 'fecha_fin', type: 'text' },
    { name: 'Editar', type: 'button', action: 'edit' },
    { name: 'Eliminar', type: 'button', action: 'delete' },
  ];

  selectedRow: Ofertas | null = null;
  showEditModal = false;
  showDeleteModal = false;
  showAddForm = false;

  constructor(private ofertaService: OfertaService, private cdr: ChangeDetectorRef , private router:Router) {}

  ngOnInit(): void {
    this.loadOfertas();
  }

  loadOfertas(): void {
    this.ofertaService.getOfertas().subscribe(
      (response: Ofertas[]) => {
        if (Array.isArray(response)) {
          this.ofertas = response;
        } else {
          this.ofertas = [response];
        }
      },
      (error) => {
        console.error('Error al cargar ofertas:', error);
      }
    );
  }

  onAddOferta(newOferta: Ofertas): void {
    this.ofertaService.createOferta(newOferta).subscribe((response) => {

      this.ofertas = [...this.ofertas, response];
      this.showAddForm = false;
      
      this.router.navigate(['/ofertas'])
      this.cdr.detectChanges();
    });
  }

  onEdit(oferta: Ofertas) {
    this.selectedRow = oferta;
    this.showEditModal = true;
  }

  onDelete(oferta: Ofertas) {
    this.selectedRow = oferta;
    this.showDeleteModal = true;
  }

  saveChanges(updatedOferta: Ofertas): void {
    console.log('Datos recibidos en el componente padre para actualizar:', updatedOferta);

    if (!updatedOferta || !updatedOferta.id_oferta) {
      console.error('El registro no tiene un ID válido.');
      return;
    }

    this.ofertaService.updateOferta(updatedOferta.id_oferta, updatedOferta).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);

        const index = this.ofertas.findIndex((o) => o.id_oferta === updatedOferta.id_oferta);
        if (index !== -1) {
          this.ofertas[index] = { ...updatedOferta };
        }
        this.showEditModal = false;
      },
      (error) => {
        console.error('Error al actualizar la oferta:', error);
      }
    );
  }

  confirmDelete() {
    if (this.selectedRow) {
      this.ofertaService.deleteOferta(this.selectedRow.id_oferta).subscribe(
        () => {
          // Eliminar la oferta de la lista en el frontend
          this.ofertas = this.ofertas.filter(o => o.id_oferta !== this.selectedRow?.id_oferta);
          this.showDeleteModal = false;
          this.selectedRow = null;
        },
        (error) => {
          console.error('Error al eliminar la oferta:', error);
        }
      );
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.selectedRow = null;
  }

  closeModal(){
    this.showAddForm = false;
  }
}
