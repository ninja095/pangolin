import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../../../models/User";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']));
  }

}
