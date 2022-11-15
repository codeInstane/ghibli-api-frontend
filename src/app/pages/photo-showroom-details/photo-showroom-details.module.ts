import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoShowroomDetailsPageRoutingModule } from './photo-showroom-details-routing.module';

import { PhotoShowroomDetailsPage } from './photo-showroom-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoShowroomDetailsPageRoutingModule
  ],
  declarations: [PhotoShowroomDetailsPage]
})
export class PhotoShowroomDetailsPageModule {}
