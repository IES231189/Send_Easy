import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css'],
})
export class EditProductosComponent implements OnChanges {
  @Input() registroTable: Producto | null = null;
  @Output() GuardarCambios = new EventEmitter<Producto & { archivoImagen?: File | undefined }>();
  @Output() cancelar = new EventEmitter<void>();

  editedData: Producto = {
    id_producto: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    id_categoria: 0,
    imagen_url: '',
  };

  selectedFile: File | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registroTable'] && changes['registroTable'].currentValue) {
      this.editedData = { ...changes['registroTable'].currentValue };
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  guardarCambios() {
    const archivoImagen = this.selectedFile ?? undefined;
    this.GuardarCambios.emit({ ...this.editedData, archivoImagen });
  }

  cerrarModal() {
    this.cancelar.emit();
  }
}
