import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  @ViewChild('content') 
  content: IonContent;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  logScrollStart() {
    console.log('scroll start');
  }

  logScrolling() {
    console.log('scrolling');
  }

  logScrollEnd() {
    console.log('scroll end');
  }

  goToTop() {
    this.content.scrollToTop();
  }

}
