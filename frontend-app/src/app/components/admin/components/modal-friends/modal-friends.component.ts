import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {User} from "../../../../models/User";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal-friends',
  templateUrl: './modal-friends.component.html',
  styleUrls: ['./modal-friends.component.scss']
})
export class ModalFriendsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalFriendsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService
  ) {}

  users!: User[];

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    selectedFriends: new FormControl(this.data?.friends ?? [])
  });

  onNoClickFriends(): void {
    console.log("data from friends before assignation----",this.data)
    const updatedUser = {...this.data};
    const friendList = this.myForm.get("selectedFriends")?.value;
    updatedUser.friends = friendList;

    console.log('monitoring the field updatedUser',updatedUser)
    console.log('monitoring the field friends',friendList)
    this.dialogRef.close(updatedUser);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log("let's edit the user on Friends", this.data)
    this.adminService.getContactList().subscribe(users => {
      this.users = users;
    });
  }

}
