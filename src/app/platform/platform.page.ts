import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-platform',
  templateUrl: './platform.page.html',
  styleUrls: ['./platform.page.scss'],
})
export class PlatformPage implements OnInit {

  constructor(private platform: Platform) {

    console.log(this.platform.platforms());

    if(this.platform.is('desktop')) {
      console.log('Estoy en un navegador de un pc/portátil');
    } else {
      console.log('NO estoy en un navegador de un pc/portátil');
    }

    if(this.platform.isRTL) {
      console.log('Texto de derecha a izquierda');
    } else {
      console.log('Texto de izquierda a derecha');
    }

    console.log(this.platform.width());
    console.log(this.platform.height());

    
  }

  ngOnInit() {
  }

}
