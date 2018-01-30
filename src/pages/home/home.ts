import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat = -2.908219;
  lng = 43.247593;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    console.log(geolocation.watchPosition);
  }
  onSetMarker(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  onLocate() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
