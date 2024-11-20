import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponentComponent } from './Table/edit-component/edit-component.component';
import { DeleteComponentComponent } from './Table/delete-component/delete-component.component';
import { TableComponent } from './Table/table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditComponentComponent,
    DeleteComponentComponent,
    TableComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    
  ],
  exports: [

  ]
})
export class SharedModule { }
