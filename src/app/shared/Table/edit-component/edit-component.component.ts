import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnChanges {
  @Input() registroTable: any;
  @Output() GuardarCambios = new EventEmitter<any>();

  editedData: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registroTable'] && changes['registroTable'].currentValue) {
      // Convertir las fechas al formato de entrada
      const registro = changes['registroTable'].currentValue;
      this.editedData = { ...registro };

      // Si la fecha no está en formato correcto para el input date, la ajustamos
      if (this.editedData.fecha_inicio) {
        this.editedData.fecha_inicio = this.formatDateForInput(this.editedData.fecha_inicio);
      }
      if (this.editedData.fecha_fin) {
        this.editedData.fecha_fin = this.formatDateForInput(this.editedData.fecha_fin);
      }
    }
  }



  OnSave() {
    if (!this.editedData) {
      console.error('El objeto a guardar no tiene un ID válido:', this.editedData);
      return;
    }
    this.GuardarCambios.emit(this.editedData);
  }




  OnCancel() {
    this.editedData = { ...this.registroTable };
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }



  private formatDateForInput(date: string): string {
    // Asegúrate de que la fecha esté en formato YYYY-MM-DD
    const parsedDate = new Date(date);
    return parsedDate.toISOString().split('T')[0]; // Devuelve en formato YYYY-MM-DD
  }
}
