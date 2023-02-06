import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
