import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descargar-ahora',
  templateUrl: './descargar-ahora.component.html',
  styleUrls: ['./descargar-ahora.component.css']
})
export class DescargarAhoraComponent {

  constructor(private router: Router) { }
  
  onDownload() {
    this.router.navigate(['/login']);
  } 

}
