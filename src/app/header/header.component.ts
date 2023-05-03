import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleMenuOpen() {
    this.isMenuOpen = false;
  }

  toggleMenuClose() {
    this.isMenuOpen = true;
  }
}
