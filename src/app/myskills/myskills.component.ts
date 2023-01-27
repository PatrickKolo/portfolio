import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  public skills: string[] = ['angular.png','typescript.png', 'javascript.png', 'html.png', 'firebase.png', 'git.png', 'css.png', 'rest-api.png', 'scrum.png', 'materialdesign.png']
  public skillName: string[] = ['Angular','Typescript', 'Javascript', 'HTML', 'Firebase', 'Git', 'CSS', 'Rest-API', 'Scrum', 'Material Design']

  constructor(public router:Router, private headerComponent:HeaderComponent) { }

  ngOnInit(): void {
  }


  public scroll(id: string) {
    if (this.router.url == '/imprint') {
      this.returnToStartpage();
      this.setLinksToFalse();
    } else {
      this.scrollToArea(id);
    }
  }
  

  setLinksToFalse() {
    this.headerComponent.aboutHeadClicked = false;
    this.headerComponent.skillClicked = false;
    this.headerComponent.portfolioClicked = false;
  }


  returnToStartpage() {
    window.location.href = 'http://localhost:4200/'
  }
  

  scrollToArea(id:string) {
    const area = document.getElementById(id);
    area?.scrollIntoView({
      behavior: 'smooth',
      block: "start",
      });
  }
}
