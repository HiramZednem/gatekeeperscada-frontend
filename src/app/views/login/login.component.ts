import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  goRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    console.log('submit');
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Debes introducir un email y una contraseña');
      return;
    }

    this.AuthService.login(this.email.trim(), this.password.trim()).subscribe(
      (response) => {
        if (response === true) {
          // Redirige al usuario a la ruta "downloads"
          this.router.navigate(['/download']);
          localStorage.setItem('autenticated', 'true');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }
}








