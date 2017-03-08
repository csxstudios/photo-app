import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PhotosPage } from '../photos/photos';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
photosPage = PhotosPage;
  constructor(public navCtrl: NavController) {
    
  }

}
