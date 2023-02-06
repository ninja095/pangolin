import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../services/admin.service";
import {User} from "../../../../models/User";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-modal-roles',
  templateUrl: './modal-roles.component.html',
  styleUrls: ['./modal-roles.component.scss']
})
export class ModalRolesComponent implements OnInit {

  roles: string[] = ['Guerrier', 'Alchimiste', 'Sorcier', 'Espions', 'Enchanteur'];

  users!: User[];

  myFormRole: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    selectedRole: new FormControl(this.data?.role ?? ''),
  });
  constructor(
    public dialogRef: MatDialogRef<ModalRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService
  ) {}


  onNoClickRole(): void {
    console.log("data ----",this.data)
    this.data.role = this.myFormRole.get("selectedRole")?.value;
    console.log('monitoring the field role',this.data.role)
    this.dialogRef.close(this.data);

  }


  ngOnInit(): void {
    console.log("let's edit the user on Role", this.data)
    this.adminService.getContactList().subscribe(users => {
      this.users = users;
    });
  }

}
