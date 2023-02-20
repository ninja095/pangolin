import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../../../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = 'http://localhost:3000/pangolin'

  constructor(private http: HttpClient) { }

  getContactList() {
    return this.http.get<User[]>(this.url);
  }

  getContact(id: string) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  updateRoleOfUser(user: User) {
    return this.http.patch<User>(`${this.url}/${user._id}`, user);
  }

  updateFriendsOfUser(user: User, friends: string[] | undefined) {
    user.friends = friends;
    return this.http.patch<User>(`${this.url}/${user._id}`, user);
  }
  addContact(user: User): Observable<any> {
    return this.http.post<any>(this.url, user);
  }
}
