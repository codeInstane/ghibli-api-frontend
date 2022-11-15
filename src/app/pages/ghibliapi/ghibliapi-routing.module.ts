import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhibliapiPage } from './ghibliapi.page';

const routes: Routes = [
  {
    path: '',
    component: GhibliapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhibliapiPageRoutingModule {}
