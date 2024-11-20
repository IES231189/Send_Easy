import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrl: './delete-component.component.css'
})
export class DeleteComponentComponent {
  @Input() registroTable : any;
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();


  onConfirmDelete(){
    this.confirmDelete.emit();
  }

  onCancel(){
    this.cancelDelete.emit();
  }
}
