import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const userData = { email, password };
    return this.http.post('http://localhost:3000/api/users/login', userData);
  }

  register(email: string, password: string) {
    const userData = { email, password };
    return this.http.post('http://localhost:3000/api/users/', userData);
  }
}
