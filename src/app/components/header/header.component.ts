import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  banners = [
    { image: 'assets/banner1.jpg', title: 'Welcome to Coloshop', subtitle: 'Find the best deals!' },
    { image: 'assets/banner2.jpg', title: 'New Arrivals', subtitle: 'Explore our latest collection' },
  ];
}
