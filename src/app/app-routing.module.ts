import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', /*login*/
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'dispose',
    loadChildren: () => import('./dispose/dispose.module').then( m => m.DisposePageModule)
  },
  {
    path: 'recycle',
    loadChildren: () => import('./recycle/recycle.module').then( m => m.RecyclePageModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'recyclingbin',
    loadChildren: () => import('./recyclingbin/recyclingbin.module').then( m => m.RecyclingbinPageModule)
  },
  {
    path: 'recyclingcentre',
    loadChildren: () => import('./recyclingcentre/recyclingcentre.module').then( m => m.RecyclingcentrePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
