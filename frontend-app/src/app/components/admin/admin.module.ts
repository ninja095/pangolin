import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalFriendsComponent } from './components/modal-friends/modal-friends.component';
import { ModalRolesComponent } from './components/modal-roles/modal-roles.component';
import { ContactsDetailsComponent } from './components/contacts-detail/contacts-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { AddContactComponent } from './components/add-contact/add-contact.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ModalFriendsComponent,
    ModalRolesComponent,
    ContactsDetailsComponent,
    ContactsComponent,
    HomeComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterLink,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
