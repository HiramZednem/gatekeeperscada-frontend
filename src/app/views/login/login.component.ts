import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // constructor(private http: HttpClient) {}

  onSubmit() {
    // Guarda los datos del usuario en variables
    // const userData = {
    //   email: this.email,
    //   password: this.password
    // };

    // // Realiza una solicitud POST a la API
    // this.http.post('http://localhost:8080/api/login', userData)
    //   .subscribe((response: any) => {
    //     // Maneja la respuesta de la API aquí
    //     console.log('Respuesta de la API:', response);

    //     // Aquí puedes implementar la lógica para redirigir al usuario a la página de inicio si la autenticación es exitosa.
    //   }, (error: any) => {
    //     // Maneja errores de la solicitud a la API aquí
    //     console.error('Error en la solicitud:', error);
    //   });
  }
}








