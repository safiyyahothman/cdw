import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.page.html',
  styleUrls: ['./recycle.page.scss'],
})
export class RecyclePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  locateBin() {
    this.navCtrl.navigateForward('/recyclingbin');
  }
  locateCentre() {
      this.navCtrl.navigateForward('/recyclingcentre');
  }

  ngOnInit() {
  }

}
