import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  public skills: string[] = ['angular.png','typescript.png', 'javascript.png', 'html.png', 'firebase.png', 'git.png', 'css.png', 'rest-api.png', 'scrum.png', 'materialdesign.png']
  public skillName: string[] = ['Angular','Typescript', 'Javascript', 'HTML', 'Firebase', 'Git', 'CSS', 'Rest-API', 'Scrum', 'Material Design']

  constructor() { }

  ngOnInit(): void {
  }

}
