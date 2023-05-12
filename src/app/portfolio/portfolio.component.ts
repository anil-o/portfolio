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
    // {
    //   image: 'assets/img/projects/pokedex-laptop.png',
    //   imageByZoom: 'assets/img/projects/pokedex.png',
    //   title: 'Pokedex',
    //   description: 'Based on the PokeAPI a simple library that provides and cataglogues pokemon information.',
    //   type: 'JavaScript | HTML | CSS | Api',
    //   link: 'https://anil-orhan.developerakademie.net/pokedex/index.html',
    //   github: 'https://github.com/anil-o/pokedex',
    //   isHovered: false,
    // },
    // {
    //   image: 'assets/img/projects/simplecrm-laptop.png',
    //   imageByZoom: 'assets/img/projects/simplecrm.png',
    //   title: 'Simple CRM',
    //   description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    //   type: 'Angular | Firebase',
    //   link: 'https://anil-orhan.developerakademie.net/simple-crm',
    //   github: 'https://github.com/anil-o/simple-crm',
    //   isHovered: false,
    // },
    {
      image: 'assets/img/projects/ringoffire-laptop.png',
      imageByZoom: 'assets/img/projects/ringoffire.png',
      title: 'Ring of Fire',
      description: 'Angular-based web-app of the popular drinking game.',
      type: 'Angular | Firebase',
      link: 'https://anil-orhan.developerakademie.net/ringoffire',
      github: 'https://github.com/anil-o/ringoffire',
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
