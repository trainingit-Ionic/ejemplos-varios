import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
    
  }

  encender() {
    this.flashlight.switchOn().then(
      function() {console.log('flash encendido');}
    );
  }

  apagar() {
    this.flashlight.switchOff();
  }

}
