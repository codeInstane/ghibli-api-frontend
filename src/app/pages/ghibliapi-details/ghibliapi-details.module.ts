import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhibliapiDetailsPageRoutingModule } from './ghibliapi-details-routing.module';

import { GhibliapiDetailsPage } from './ghibliapi-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhibliapiDetailsPageRoutingModule
  ],
  declarations: [GhibliapiDetailsPage]
})
export class GhibliapiDetailsPageModule {}
