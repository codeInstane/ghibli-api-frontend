import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoShowroomService } from 'src/app/services/photo-showroom.service';

@Component({
  selector: 'app-photo-showroom-details',
  templateUrl: './photo-showroom-details.page.html',
  styleUrls: ['./photo-showroom-details.page.scss'],
})
export class PhotoShowroomDetailsPage implements OnInit {
  photo = null;
  constructor(private route: ActivatedRoute, 
              private photoshowroomService: PhotoShowroomService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    //console.log(id)
    this.photoshowroomService.getPhotoDetails(id).subscribe((res) => {
      console.log(res);
      this.photo = res;
    });
    
  }

  openHomepage(){
    window.open(this.photo.url);
  }
}
