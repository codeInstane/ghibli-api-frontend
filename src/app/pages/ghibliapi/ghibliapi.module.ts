import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhibliapiPageRoutingModule } from './ghibliapi-routing.module';

import { GhibliapiPage } from './ghibliapi.page';
import { OrderByPipe } from '../../pipe/orderby.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhibliapiPageRoutingModule
  ],
  declarations: [GhibliapiPage, OrderByPipe]
})
export class GhibliapiPageModule {}
