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
  password2: string = ''

  constructor(private AuthService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Debes introducir un email y una contraseña');
      return;
    }

    if (this.password.trim() !== this.password2.trim()) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.AuthService.register(this.email.trim(), this.password.trim()).subscribe(
      (response) => {
        if (response === true) {
          alert('Usuario registrado correctamente');
          this.router.navigate(['/login']);
        } else {
          alert('Error al registrar usuario');
        }
      });
  }

}
