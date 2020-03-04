import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { RecyclingcentrePageRoutingModule } from './recyclingcentre-routing.module';

import { RecyclingcentrePage } from './recyclingcentre.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecyclingcentrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecyclingcentrePage],
  providers: [Geolocation]
})
export class RecyclingcentrePageModule {}
