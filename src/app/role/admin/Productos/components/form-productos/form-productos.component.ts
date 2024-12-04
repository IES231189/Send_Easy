import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosCategoriasService } from '../../services/productos-categorias.service';
import { Producto } from '../../model/producto';
import { Categoria } from '../../../Categories/models/categorias';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit {
  productoForm: FormGroup;
  categorias: Categoria[] = [];
  imagePreview: string | ArrayBuffer | null = null; // Para la vista previa de la imagen

  constructor(
    private fb: FormBuilder,
    private productosCategoriasService: ProductosCategoriasService,
    private router:Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      id_categoria: ['', Validators.required],
      imagen_url: [null] // Este campo ya no es necesario para el formulario
    });
  }

  ngOnInit(): void {
    // Cargar categorías desde el servicio
    this.productosCategoriasService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  // Manejar la carga de la imagen

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Vista previa de la imagen
      };
      reader.readAsDataURL(file);

      // Actualizar el valor del archivo en el formulario
      this.productoForm.patchValue({
        imagen_url: file // Guardar el archivo seleccionado
      });
    }
  }


  // Enviar formulario
  onSubmit() {
    if (this.productoForm.valid) {
      // FormData para enviar el archivo
      const formData = new FormData();
      formData.append('nombre', this.productoForm.get('nombre')?.value);
      formData.append('descripcion', this.productoForm.get('descripcion')?.value);
      formData.append('id_categoria', this.productoForm.get('id_categoria')?.value);
      formData.append('precio', this.productoForm.get('precio')?.value.toString());
      formData.append('stock', this.productoForm.get('stock')?.value.toString());

      // Adjuntar archivo de imagen si está presente
      const imagen = this.productoForm.get('imagen_url')?.value;
      if (imagen) {
        formData.append('imagen', imagen);
      }

      // Enviamos el archivo
      this.productosCategoriasService.createProducto(formData).subscribe(
        (response) => {
          console.log('Producto creado', response);
          //  después de crear el producto
           alert('Producto creado');
           this.router.navigate(['/admin/productos/all'])
        },
        (error) => {
          console.error('Error al crear producto', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

}
