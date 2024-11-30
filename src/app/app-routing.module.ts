import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponentsComponent } from './auth/components/login-components/login-components.component';
import { AdminAppComponent } from './role/admin/admin-app/admin-app.component';
import { adminGuard } from './guards/admin.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./role/admin/admin.module').then(m => m.AdminModule), canActivate: [adminGuard] },
  { path: 'login', component: LoginComponentsComponent },
  { path: '*', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
