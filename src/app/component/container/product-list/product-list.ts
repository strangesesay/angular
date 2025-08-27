import { Component } from '@angular/core';
import {NgFor} from "@angular/common";
import {NgStyle} from '@angular/common';
import {Product} from './product/product';

@Component({
  selector: 'app-product-list',
  imports: [
    NgFor, NgStyle, Product
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {


  products = [
    {
      name: 'Mouse',
      price: 10.99,
      imageUrl: 'assets/purple-computer-mouse.jpg',
      rating: 4.5,
      reviews: 120,
      quantity: 10,
      count: 0
    },
    {
      name: 'Keyboard',
      price: 20.99,
      imageUrl: 'assets/keyboard-mouse-table.jpg',
      rating: 4.0,
      reviews: 80,
      quantity: 0,
      count: 0
    },
    {
      name: 'Monitor',
      price: 15.49,
      imageUrl: 'assets/blank-desktop-computer.jpg',
      rating: 3.5,
      reviews: 45,
      quantity: 25,
      count: 0
    },
    {
      name: 'iphone',
      price: 25.00,
      imageUrl: 'assets/elegant-smartphone-composition.jpg',
      rating: 5.0,
      reviews: 200,
      quantity: 10,
      count: 0
    }
  ];



  addProduct(product: any): void {
    if (product.count < product.quantity) {
      product.count++;   // just increment, no return
    }
  }

  reduceProduct(product: any): void {
    if (product.count > 0) {
     product.count--;   // just decrement, no return
    }
  }



}

