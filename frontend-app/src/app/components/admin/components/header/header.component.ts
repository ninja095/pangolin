import {Component, OnInit} from '@angular/core';
import {filter, map, merge, Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.service";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {User} from "../../../../models/User";
import {ModalRolesComponent} from "../modal-roles/modal-roles.component";
import {AddContactComponent} from "../add-contact/add-contact.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  id!: string;
  user!: Observable<User>;

  isLoading!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), map(() => false));

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), map(() => true));

    this.isLoading = merge(this.hideLoader, this.showLoader);

    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }

  openDialogAddContact(user?: User): void {
    let dialogConfigAddContact = new MatDialogConfig();
    dialogConfigAddContact.data = user;

    const dialogRef = this.dialog.open(AddContactComponent, dialogConfigAddContact);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed. we received from the dialog-addContact', result);
        this.addDataContact(result);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
  addDataContact(user: User) {
    this.adminService.addContact(user).subscribe(data => {
    })
  }
}
