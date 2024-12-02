import { Component } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  standalone: false,
  
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent {
  products = [
    { name: 'Product 1', price: '$10', image: 'assets/product1.jpg' },
    { name: 'Product 2', price: '$15', image: 'assets/product2.jpg' },
    { name: 'Product 3', price: '$20', image: 'assets/product3.jpg' },
    { name: 'Product 4', price: '$25', image: 'assets/product4.jpg' },
  ];
  
}
