import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public router:Router, private headerComponent:HeaderComponent) { }

  ngOnInit(): void {
  }

  
  visit(url:string) {
    window.open(url, '_blank');
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


