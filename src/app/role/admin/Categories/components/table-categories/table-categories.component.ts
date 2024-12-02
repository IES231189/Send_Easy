import { Component , OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrl: './table-categories.component.css'
})
export class TableCategoriesComponent {

  categorias: any[] = [];
  columns = [
    { name: 'nombre', type: 'text' },
    { name: 'descripcion', type: 'text' },
    { name: 'eliminar', type: 'button', action: 'delete' }
  ];


  selectedCategoria: any = null;
  showDeleteModal: boolean = false;
  mostrarForm: boolean = false;

  constructor(private categoriaService: CategoriaService , private router: Router) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  abrirformulario(){
    //this.mostrarForm = true;
    this.router.navigate(['productos/categories/addCategories'])
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

  onDelete(categoria: any) {
    this.selectedCategoria = categoria;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.selectedCategoria) {
      this.categoriaService.deleteCategoria(this.selectedCategoria.id_categoria).subscribe(
        () => {
          this.categorias = this.categorias.filter(
            (cat) => cat.id_categoria !== this.selectedCategoria.id_categoria
          );
          this.showDeleteModal = false;
          this.selectedCategoria = null;
        },
        (error) => {
          console.error('Error al eliminar categoría:', error);
        }
      );
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.selectedCategoria = null; // Cancela la eliminación
  }

  cerrarFormulario() {
    this.mostrarForm = false;
  }

}
