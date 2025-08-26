import { Component, signal } from '@angular/core';
import {Header} from "./component/header/header";
import {Container} from './component/container/container';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [Header, Container, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('new-app');
}
