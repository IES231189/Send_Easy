import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListNavComponent } from './list-nav/list-nav.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import { TableComponent } from './Table/table/table.component';
import { EditComponentComponent } from './Table/edit-component/edit-component.component';
import { DeleteComponentComponent } from './Table/delete-component/delete-component.component';

@NgModule({
  declarations: [
    ListNavComponent,
    HeaderComponentComponent,
    TableComponent,
    EditComponentComponent,
    DeleteComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListNavComponent,
    HeaderComponentComponent,
    TableComponent,
    EditComponentComponent,
    DeleteComponentComponent
  ]
})
export class SharedModule { }
