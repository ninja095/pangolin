import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:3000/pangolin';

  constructor(private router: Router, private http: HttpClient) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if (userInfo.email === 'admin@mail.com' && userInfo.password === 'admin123'){
      this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg')
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }

  logout(){
    this.router.navigate(['login'])
  }
  registration(user: User): Observable<any>  {
    return this.http.post<any>(this.url, user);
  }
}

