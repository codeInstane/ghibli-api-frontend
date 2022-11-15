import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoShowroomDetailsPage } from './photo-showroom-details.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoShowroomDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoShowroomDetailsPageRoutingModule {}
