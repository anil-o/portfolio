import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  onOverlay = false;

  projects = [
    {
      image: 'link',
      title: 'El Pollo Loco',
      description: 'Jump and run game',
      type: 'Angular',
      link: 'link',
      github: 'link'
    },
  ];
  ngOnInit(): void {

  }

  onOverlayTrue() {
    this.onOverlay = true;
  }

  onOverlayFalse() {
    this.onOverlay = false;
  }
}
