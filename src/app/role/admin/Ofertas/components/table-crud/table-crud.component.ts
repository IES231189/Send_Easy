import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta.service';
import { Ofertas } from '../../models/ofertas';

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

  constructor(private ofertaService: OfertaService) {}

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
      this.ofertas.push(response);
      this.showAddForm = false;
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

  saveChanges(updatedOferta: Ofertas) {
    const index = this.ofertas.findIndex((o) => o.id_oferta === updatedOferta.id_oferta);
    if (index !== -1) {
      this.ofertas[index] = { ...updatedOferta };
    }
    this.showEditModal = false;
  }

  confirmDelete() {
    this.ofertas = this.ofertas.filter((o) => o.id_oferta !== this.selectedRow?.id_oferta);
    this.showDeleteModal = false;
    this.selectedRow = null;
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.selectedRow = null;
  }

  closeModal(){
    this.showAddForm = false;
  }

}
