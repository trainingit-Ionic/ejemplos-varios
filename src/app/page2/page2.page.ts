import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  coords: Coordinates;
  company_address = 'Koning Albert l-laan 200, 8200 Brugge';
  constructor(private geolocation: Geolocation, private launchNavigator: LaunchNavigator, private socialSharing: SocialSharing) { 
    
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
      console.log('estoy en el then');
      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('estoy en el subscribe');
      console.log(data);
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    });
  }

  openNavigationApp() {
    let options: LaunchNavigatorOptions = {
      start: ""+this.coords.latitude+","+this.coords.longitude
    };
    
    this.launchNavigator.navigate(this.company_address, options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }

  share() {

    var options = {
      message: 'share this', // not supported on some apps (Facebook, Instagram)
      subject: 'the subject', // fi. for email
      files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
    };

    this.socialSharing.share();
  }

}
