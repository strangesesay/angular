import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule, NgIf
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText: string = '';

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
