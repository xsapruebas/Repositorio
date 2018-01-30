import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  imageUrl = '';

  constructor(public navCtrl: NavController, private camera: Camera) {
  }
  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData; 
          this.imageUrl = base64Image;
      }, (err) => {
        // Handle error Hay cambios?
      });
  }

}
