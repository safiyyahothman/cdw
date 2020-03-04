import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dispose',
  templateUrl: './dispose.page.html',
  styleUrls: ['./dispose.page.scss'],
})
export class DisposePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  openDelivery() {
    this.navCtrl.navigateForward('/delivery');
  }
  ngOnInit() {
  }

}
