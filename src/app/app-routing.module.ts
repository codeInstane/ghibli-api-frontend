import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    //redirectTo: 'photo-showroom',
    redirectTo: 'ghibliapi',
    //loadChildren: 
    pathMatch: 'full'
  },
  {
    path: 'photo-showroom',
    loadChildren: () => import('./pages/photo-showroom/photo-showroom.module').then( m => m.PhotoShowroomPageModule)
  },
  {
    path: 'photo-showroom/:id',
    //loadChildren: () => import('./pages/photo-showroom/photo-showroom.module').then( m => m.PhotoShowroomPageModule)
    loadChildren: () => import('./pages/photo-showroom-details/photo-showroom-details.module').then( m => m.PhotoShowroomDetailsPageModule)
  },
  {
    path: 'photo-showroom-details',
    loadChildren: () => import('./pages/photo-showroom-details/photo-showroom-details.module').then( m => m.PhotoShowroomDetailsPageModule)
  },
  {
    path: 'ghibliapi/:id',
    //loadChildren: () => import('./pages/ghibliapi/ghibliapi.module').then( m => m.GhibliapiPageModule)
    loadChildren: () => import('./pages/ghibliapi-details/ghibliapi-details.module').then( m => m.GhibliapiDetailsPageModule)
  },
  {
    path: 'ghibliapi',
    loadChildren: () => import('./pages/ghibliapi/ghibliapi.module').then( m => m.GhibliapiPageModule)
    
  },
  {
    path: 'ghibliapi-details',
    loadChildren: () => import('./pages/ghibliapi-details/ghibliapi-details.module').then( m => m.GhibliapiDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
