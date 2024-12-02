import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Shop', icon: 'pi pi-shopping-cart', routerLink: '/shop' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
  ];
}
