import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoShowroomPage } from './photo-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoShowroomPageRoutingModule {}
