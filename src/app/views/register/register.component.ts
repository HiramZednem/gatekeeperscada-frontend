import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  email: string = '';
  password: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('submit');
    this.AuthService.login(this.email, this.password).subscribe(
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
