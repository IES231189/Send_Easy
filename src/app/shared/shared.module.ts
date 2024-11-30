import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponentComponent } from './Table/edit-component/edit-component.component';
import { DeleteComponentComponent } from './Table/delete-component/delete-component.component';
import { TableComponent } from './Table/table/table.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import { RouterModule } from '@angular/router';
import { ListNavComponent } from './list-nav/list-nav.component';




@NgModule({
  declarations: [
    EditComponentComponent,
    DeleteComponentComponent,
    TableComponent,
    HeaderComponentComponent,
    ListNavComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    RouterModule
  ],
  exports: [
    TableComponent,
    EditComponentComponent,
    DeleteComponentComponent,
    HeaderComponentComponent
  ]
})
export class SharedModule { }
