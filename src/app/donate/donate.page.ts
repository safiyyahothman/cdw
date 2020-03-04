import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  openDelivery() {
    this.navCtrl.navigateForward('/delivery');
  }
  ngOnInit() {
  }

}
