import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() navegation: boolean = false;

  constructor(private router: Router) { }
  
  onDownload() {
    this.router.navigate(['/login']);
  } 

}
