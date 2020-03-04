import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  openDonatePage() {
    this.navCtrl.navigateForward('/donate');
  }
  openDisposePage() {
      this.navCtrl.navigateForward('/dispose');
  }
  openRecyclePage() {
    this.navCtrl.navigateForward('/recycle');
}
}
