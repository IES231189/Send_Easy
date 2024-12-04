import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../models/categorias';
import { CategoriaService } from '../../services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.html']
})
export class CategoriaFormComponent {
  @Input() categoria: Categoria = { nombre: '', descripcion: '' };
  @Output() onSave: EventEmitter<Categoria> = new EventEmitter();
  @Output() cerrar: EventEmitter<void> = new EventEmitter();


  constructor(private categoriaService: CategoriaService , private router:Router) {}

  saveCategoria(): void {
    if (this.categoria.id_categoria) {
      // Actualizar categoría existente
      this.categoriaService.updateCategoria(this.categoria.id_categoria, this.categoria).subscribe(
        (response) => {
          console.log('Categoría actualizada:', response);
          this.onSave.emit(response);
        },
        (error) => console.error('Error al actualizar categoría:', error)
      );
    } else {
      // Crear nueva categoría
      this.categoriaService.createCategoria(this.categoria).subscribe(
        (response) => {
          console.log('Categoría creada:', response);
          alert('Categoria creada');
          this.router.navigate(['/admin/productos/categories'])
          this.onSave.emit(response);
        },
        (error) => console.error('Error al crear categoría:', error)
      );
    }
  }

  cerrarFormulario(): void {
    //this.cerrar.emit();
    this.router.navigate(['productos/categories'])
  }


}
