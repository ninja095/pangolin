import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {User} from "../../../../models/User";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService
  ) {
  }

  users: User[] =[];

  addContactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  onClickAddContact(): void {

    const newContact = {
      name : this.addContactForm.get("name")?.value,
      password: this.addContactForm.get('password')?.value
    };
    console.log("data from friends before assignation----",newContact)
    this.dialogRef.close(newContact)

  }
  ngOnInit(): void {

  }

}
