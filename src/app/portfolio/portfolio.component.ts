import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  projects = [
    {
      image: 'assets/img/projects/el-pollo-loco.png',
      imageByZoom: 'assets/img/projects/el-pollo-loco-bg.png',
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      type: 'JavaScript | HTML | CSS',
      link: 'http://anil-orhan.developerakademie.net/el_pollo_loco/index.html',
      github: 'https://github.com/anil-o/elPolloLoco',
      isHovered: false,
    },
    {
      image: 'assets/img/projects/join-with-laptop.png',
      imageByZoom: 'assets/img/projects/join.png',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasking using drag and drop functions assign users and categories.',
      type: 'JavaScript | HTML | CSS',
      link: 'https://anil-orhan.developerakademie.net/join/index.html',
      github: 'https://github.com/anil-o/join',
      isHovered: false,
    },
  ];
  ngOnInit(): void {

  }

  hoveredTrue(index) {
    this.projects[index].isHovered = true;
    console.log('mouse over', this.projects[index].isHovered);
  }

  hoveredFalse(index) {
    this.projects[index].isHovered = false;
    console.log('mouse out', this.projects[index].isHovered);
  }
}
