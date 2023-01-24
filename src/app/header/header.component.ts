import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  aboutHeadClicked: boolean = false;
  skillClicked: boolean = false;
  portfolioClicked: boolean = false;
  contactClicked: boolean = false;
  dialogClosed: boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  
setUnderline(id:string) {
  if (id == 'about-head') {
    this.setAboutToTrue();
  } else if (id == 'skill-head' ) {
    this.setSkillToTrue();
  } else if (id == 'pf-head') {
    this.setPortfolioToTrue();
  } else {
    this.setContactToTrue();
  }
}

setAboutToTrue() {
  this.aboutHeadClicked = true;
  this.skillClicked = false;
  this.portfolioClicked = false;
  this.contactClicked = false;
}

setSkillToTrue() {
  this.aboutHeadClicked = false;
  this.skillClicked = true;
  this.portfolioClicked = false;
  this.contactClicked = false;
}

setPortfolioToTrue() {
  this.aboutHeadClicked = false;
  this.skillClicked = false;
  this.portfolioClicked = true;
  this.contactClicked = false;
}

setContactToTrue() {
  this.aboutHeadClicked = false;
  this.skillClicked = false;
  this.portfolioClicked = false;
  this.contactClicked = true;
}

setLinksToFalse() {
  this.aboutHeadClicked = false;
  this.skillClicked = false;
  this.portfolioClicked = false;
  this.contactClicked = false;
}

public scroll(id: string) {
  if (this.router.url == '/imprint') {
    this.returnToStartpage();
    this.setLinksToFalse();
  } else {
    this.scrollToArea(id);
  }
}

returnToStartpage() {
  window.location.href = 'http://localhost:4200/'
}

scrollToArea(id:string) {
  const area = document.getElementById(id);
    area?.scrollIntoView({
      behavior: 'smooth',
      block: "start",
      inline: "center"
      });
}

openDialog() {
  this.dialogClosed = false;
}

closeDialog() {
  this.dialogClosed = true;
}

}
