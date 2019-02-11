import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild('content') content: IonContent;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  goToTop() {
    this.content.scrollToTop();
  }

}
