import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponentsComponent } from './auth/components/login-components/login-components.component';
import { TableComponent } from './shared/Table/table/table.component';
import { SidebarComponentComponent } from './role/admin/sidebar-component/sidebar-component.component';
import { ProductosCardsComponent } from './role/admin/Productos/productos-cards/productos-cards.component';
import { ProductosListTableComponent } from './role/admin/Productos/productos-list-table/productos-list-table.component';
import { AdminAppComponent } from './role/admin/admin-app/admin-app.component';
import { AdminModule } from './role/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductosCardsComponent,
    ProductosListTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
