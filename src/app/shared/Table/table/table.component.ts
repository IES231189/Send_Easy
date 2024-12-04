import { Component  , Input , Output ,EventEmitter} from '@angular/core';
import { Ofertas } from '../../../role/admin/Ofertas/models/ofertas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() data: any[] = [];
  @Input() columns: Array<{ name: string, type: string, action?: string }> = [];

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();



  onAction(row: any, action:string) {
    if (action === "edit") {
      this.edit.emit(row);
    } else if (action === "delete") {
      this.delete.emit(row)
    }
  }

  trackByOferta(index: number, oferta: Ofertas): any {
    return oferta.id_oferta;  // o cualquier campo único que identifique de manera única a cada oferta
  }

}
