import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecyclingcentrePage } from './recyclingcentre.page';

const routes: Routes = [
  {
    path: '',
    component: RecyclingcentrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecyclingcentrePageRoutingModule {}
