import {Component, OnInit} from '@angular/core';
import {filter, map, merge, Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.service";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), map(() => false));

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), map(() => true));

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

  logout() {
    this.authService.logout();
  }
}
