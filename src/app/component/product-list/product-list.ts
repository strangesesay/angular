import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  name = 'John Doe';
  products =
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 25.99,
      mimage: './assets/purple-computer-mouse.jpg',
      instock: 0
    }

}
