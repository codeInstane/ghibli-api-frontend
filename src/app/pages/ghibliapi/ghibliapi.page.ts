import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { PhotoShowroomService } from 'src/app/services/photo-showroom.service';

@Component({
  selector: 'app-ghibliapi',
  templateUrl: './ghibliapi.page.html',
  styleUrls: ['./ghibliapi.page.scss'],
})
export class GhibliapiPage implements OnInit {

  photos = [];
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
    
    this.photoshowroomService.getGhibliapi().subscribe((res) => {
      loading.dismiss();
      this.photos = res;
    console.log(res);
  
    event?.target.complete();
    });
  }
  
  loadMore(event: InfiniteScrollCustomEvent){
    this.loadingPhoto(event);
  }
}
