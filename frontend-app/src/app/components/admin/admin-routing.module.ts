import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsDetailsComponent} from './components/contacts-detail/contacts-details.component';
import {HomeComponent} from './components/home/home.component';
import {UserResolver} from './resolvers/user.resolver';
import {UsersResolver} from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: 'contacts', component: ContactsComponent, resolve: {
          users: UsersResolver
        }},
      {
        path: 'contacts/user/:_id', component: ContactsDetailsComponent, resolve: {
          user: UserResolver
        }
      },
      {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
