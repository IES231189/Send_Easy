import { Component, EventEmitter, Output } from '@angular/core';
import { Ofertas } from '../../models/ofertas';


@Component({
  selector: 'app-form-ofertas',
  templateUrl: './form-ofertas.component.html',
  styleUrls: ['./form-ofertas.component.css']
})
export class FormOfertasComponent {

  @Output() closeModal = new EventEmitter<void>();

  oferta: Ofertas = {
    id_oferta: 0,
    nombre: '',
    descripcion: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date()
  };

  @Output() agregarOferta = new EventEmitter<Ofertas>();

  onSubmit(): void {
    if (this.oferta.nombre && this.oferta.descripcion && this.oferta.fecha_inicio && this.oferta.fecha_fin) {
      this.agregarOferta.emit(this.oferta);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.oferta = {
      id_oferta: 0,
      nombre: '',
      descripcion: '',
      fecha_inicio: new Date(),
      fecha_fin: new Date()
    };
  }

  close(){
    this.closeModal.emit();
  }
  
}
