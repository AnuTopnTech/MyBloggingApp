import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  constructor(public authService: AuthService,
    public router: Router,
  ) {
    this.authService = authService;
    this.isLoggedIn = false; }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
