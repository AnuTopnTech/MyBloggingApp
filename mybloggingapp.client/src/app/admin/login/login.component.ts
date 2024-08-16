import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email!: string;
  password!: string;
  authService = inject(AuthService);
  router = inject(Router);

  login() {

    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe((result) => {
        console.log(result);
        localStorage.setItem('token', result.accessToken);
        this.router.navigateByUrl("/admin/blogs");
      });
    } else {
      alert('Please enter email and password');
    }

  }
}
