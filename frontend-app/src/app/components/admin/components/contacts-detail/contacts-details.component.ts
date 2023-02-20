import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalRolesComponent} from "../modal-roles/modal-roles.component";
import {ModalFriendsComponent} from "../modal-friends/modal-friends.component";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  id!: string;
  user!: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']))
  }

  openDialogRole(user?: User): void {
    let dialogConfigRole = new MatDialogConfig();
    dialogConfigRole.data = user;

    const dialogRef = this.dialog.open(ModalRolesComponent, dialogConfigRole);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed. we received from the dialog-role', result);
        this.updateDataRole(result);
      }
    });
  }


  openDialogFriends(user?: User): void {
    let dialogConfigFriends = new MatDialogConfig();
    dialogConfigFriends.data = user;
    dialogConfigFriends.disableClose = true

    const dialogRef = this.dialog.open(ModalFriendsComponent, dialogConfigFriends);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed. we received from the dialog-friends', result);
        this.updateFriendsData(result, result.friends);
      }
    });
  }

  updateDataRole(user: User) {
    this.adminService.updateRoleOfUser(user).subscribe(data => {
    })
  }
  updateFriendsData(user: User, friends: string[] | undefined) {
    this.adminService.updateFriendsOfUser(user, friends).subscribe(data => {
    })
  }
}
