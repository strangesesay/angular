import { Component } from '@angular/core';
import {Search} from './search/search';
import {FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { ProductList}  from './product-list/product-list';

@Component({
  selector: 'app-container',
  imports: [
    Search, FormsModule, ProductList, FormsModule
  ],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

}
