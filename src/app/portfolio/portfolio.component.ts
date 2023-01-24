import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public projectnames: string[] = ['Join', 'El Pollo Loco', 'Rong of fire', 'Pokedex'];
  public projectimages: string[] = ['join-placeholder .png', 'sharkie-placeholder.png', 'pokedex-placeholder.png', 'simple-CRM-placeholder.png'];
  public methods: string[] = ['HTML | CSS | JavaScript', 'HTML | CSS | JavaScript', 'Angular | Firebase', 'HTML | CSS | JavaScript | API'];
  public descriptions: string[] = ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop function, assign users and categories',
'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to defeat a giant chicken', 
'[Under construction]A very simple Customer Relationship Management system working with CRUD functionality[Under construction]', 'Based on the PokéAPI, a simple library that provides and catalogues pokemon information',];

  constructor() { }

  ngOnInit(): void {
  }

}
