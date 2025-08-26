import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  mainMenuItems = [ 'Home', 'About', 'Services', 'Contact'
  ];
  protected readonly name = name;
}
