import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { PhotoShowroomService } from 'src/app/services/photo-showroom.service';

@Component({
  selector: 'app-photo-showroom',
  templateUrl: './photo-showroom.page.html',
  styleUrls: ['./photo-showroom.page.scss'],
})
export class PhotoShowroomPage implements OnInit {
  images = [];
  constructor(private photoshowroomService: PhotoShowroomService, 
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadingPhoto();
  }

async loadingPhoto(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
    message: 'Loading..',
    spinner: 'bubbles',
  });
  await loading.present()
  
  this.photoshowroomService.getPhoto().subscribe((res) => {
    loading.dismiss();
    this.images = [...this.images, ...res.attached_image];  
  //console.log(res);
  console.log(this.images);

  event?.target.complete();
  });
}

loadMore(event: InfiniteScrollCustomEvent){
  this.loadingPhoto(event);
}



}
