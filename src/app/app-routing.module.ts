import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponentsComponent } from './auth/components/login-components/login-components.component';


const routes: Routes = [
  { path: 'login', component: LoginComponentsComponent, pathMatch: 'full' },
//  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
 // { path: 'user', component: UserComponent, canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
