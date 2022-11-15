import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoShowroomPageRoutingModule } from './photo-showroom-routing.module';

import { PhotoShowroomPage } from './photo-showroom.page';
//import { OrderByPipe } from '../../pipe/orderby.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoShowroomPageRoutingModule,    
  ],
  declarations: [PhotoShowroomPage, /*OrderByPipe*/]
})
export class PhotoShowroomPageModule {}
