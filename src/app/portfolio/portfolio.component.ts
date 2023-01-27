import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public projectnames: string[] = ['Join', 'El Pollo Loco', 'Simple CRM', 'Pokedex'];
  public projectimages: string[] = ['join.png', 'loco-placeholder.png', 'simple-crm.png', 'pokedex.png'];
  public methods: string[] = ['HTML | CSS | JavaScript', 'HTML | CSS | JavaScript', 'Angular | Firebase', 'HTML | CSS | JavaScript | API'];
  public descriptions: string[] = ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop function, assign users and categories',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to defeat a giant chicken',
    '[Under construction]A very simple Customer Relationship Management system working with CRUD functionality[Under construction]', 'Based on the PokéAPI, a simple library that provides and catalogues pokemon information',];
  public livetests: string[] = ['https://patrick-kolodziej.developerakademie.net/join/src/index.html', 'http://patrick-kolodziej.developerakademie.net/El%20Pollo%20Loco/index.html','http://patrick-kolodziej.developerakademie.net/ringoffire/index.html'
    ,'http://patrick-kolodziej.developerakademie.net/Pokedex%202/index.html'];
  public github: string[] = ['https://github.com/PatrickKolo/Join', 'https://github.com/PatrickKolo/El-Pollo-Loco', 'https://github.com/PatrickKolo/ringoffire', 'https://github.com/PatrickKolo/Pokedex'];


  constructor() { }

  ngOnInit(): void {
  }
  visitProject(url: string) {
    window.open(url, '_blank');
  }
}
