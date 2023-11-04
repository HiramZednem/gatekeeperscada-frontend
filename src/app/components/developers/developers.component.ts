import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent {

  constructor(private router: Router) { }
  
  onDownload() {
    this.router.navigate(['/login']);
  } 

}
