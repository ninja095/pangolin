import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loginForm!: FormGroup;
  subscription!: Subscription;
  errorRes: object | null = null;

  name: string | undefined;
  password: string | undefined;

  users: User[] =[];


  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(
        null, [Validators.required]
      ),
      password: new FormControl(
        null, [Validators.required]
      )
    });
  }

  onSubmit() {

    this.subscription = this.authService.registration(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['login']),
      error: err => alert(err.message)
    })


  }

}
