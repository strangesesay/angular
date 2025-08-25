import { Component, signal } from '@angular/core';
import {Header} from "./component/header/header";
import {ProductList} from './component/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('new-app');
}
