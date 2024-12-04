import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categorias.service';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categorias';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css'],
})
export class TableCategoriesComponent implements OnInit {
  categorias: Categoria[] = [];

  selectedCategoria: Categoria | null = null;
  showDeleteModal: boolean = false;
  showEditModal: boolean = false;

  columns = [
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'editar', type: 'button', action: 'edit' },
    { name: 'eliminar', type: 'button', action: 'delete' },
  ];

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  abrirFormulario() {
    this.router.navigate(['productos/categories/addCategories']);
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
        console.log('Datos recibidos:', data);
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  onEdit(categoria: Categoria) {
    this.selectedCategoria = categoria;
    this.showEditModal = true;
  }

  guardarCambios(categoriaEditada: Categoria) {

    if (categoriaEditada.id_categoria) {
      this.categoriaService.updateCategoria(categoriaEditada.id_categoria, categoriaEditada).subscribe(
        () => {
          this.getCategorias();
          this.showEditModal = false;
        },
        (error) => {
          console.error('Error al guardar cambios:', error);
        }
      );
    } else {
      console.error('ID de categoría no válido:', categoriaEditada);
    }
  }


  cerrarModal() {
    this.showEditModal = false;
  }

  onDelete(categoria: Categoria) {
    this.selectedCategoria = categoria;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.selectedCategoria?.id_categoria) {
      this.categoriaService.deleteCategoria(this.selectedCategoria.id_categoria).subscribe(
        () => {
          this.categorias = this.categorias.filter(
            (cat) => cat.id_categoria !== this.selectedCategoria?.id_categoria
          );
          this.showDeleteModal = false;
          this.selectedCategoria = null;
        },
        (error) => {
          console.error('Error al eliminar categoría:', error);
        }
      );
    } else {
      console.error('ID de categoría no válido:', this.selectedCategoria);
    }
  }



  cancelDelete() {
    this.showDeleteModal = false;
    this.selectedCategoria = null;
  }
}
