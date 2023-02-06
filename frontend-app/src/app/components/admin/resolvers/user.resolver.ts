import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, delay, EMPTY, Observable, of} from 'rxjs';
import {AdminService} from '../services/admin.service';
import {User} from "../../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private adminService: AdminService, private router: Router ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.adminService.getContact(route.params?.['_id']).pipe(
      delay(1000),
      catchError( () => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
