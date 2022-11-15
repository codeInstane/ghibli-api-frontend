import { Component, OnInit } from '@angular/core';
import { PhotoShowroomService } from 'src/app/services/photo-showroom.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ghibliapi-details',
  templateUrl: './ghibliapi-details.page.html',
  styleUrls: ['./ghibliapi-details.page.scss'],
})
export class GhibliapiDetailsPage implements OnInit {

  photo = null;
  constructor(private route: ActivatedRoute, 
              private photoshowroomService: PhotoShowroomService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    //console.log(id)
    this.photoshowroomService.getGhibliapiDetails(id).subscribe((res) => {
      console.log(res);
      this.photo = res;
    });
    
  }

  openHomepage(){
    window.open(this.photo.url);
  }

}
