import { Component , Input, Output , EventEmitter, OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrl: './edit-component.component.css'
})
export class EditComponentComponent implements OnChanges{
  @Input() registroTable: any;
  @Output() GuardarCambios = new EventEmitter<any>();

  editedData: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registroTable'] && changes['registroTable'].currentValue) {
      this.editedData = { ...this.registroTable };
    }
  }

  OnSave() {
    this.GuardarCambios.emit(this.editedData);
  }

  OnCancel() {
    this.editedData = { ...this.registroTable };
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
