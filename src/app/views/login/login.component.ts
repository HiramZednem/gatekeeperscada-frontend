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

  onSubmit() {
    console.log('submit');
    this.AuthService.login(this.email, this.password).subscribe(
      (response) => {
        if (response === true) {
          // Redirige al usuario a la ruta "downloads"
          this.router.navigate(['/descargas']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }
}








