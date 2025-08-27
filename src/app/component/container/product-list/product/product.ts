import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-product',
    imports: [
      NgFor, NgStyle
    ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input()
  product:{
  name: string,
  price: number,
  imageUrl: string,
  rating: number,
  reviews: number,
  quantity: number,
  count: number
} ;
}
