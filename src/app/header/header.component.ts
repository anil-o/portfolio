import { Component, OnInit, Inject, Renderer2  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        transform: 'translateX(100%)'
      })),
      transition('open => closed', [
        animate('225ms')
      ]),
      transition('closed => open', [
        animate('225ms')
      ]),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    
  }

  toggleMenuOpen() {
    this.isMenuOpen = false;
    this.renderer.removeClass(this.document.body, 'not-scrolling');
  }

  toggleMenuClose() {
    this.isMenuOpen = true;
    this.renderer.addClass(this.document.body, 'not-scrolling');
  }
}
