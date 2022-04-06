import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit, OnDestroy {

  photos : any;
  id !: number;  
  photoId : number = 0;
  photoDetails : any;

  constructor(private galleryService: GalleryService, private activateRoute : ActivatedRoute, private headerService: HeaderService) { }

  ngOnInit(): void {
   this.photos =  this.galleryService.photos;
   console.log(this.photos); 

   this.activateRoute.params.subscribe(res=>{
     this.id = res['id'];
     console.log(this.id);
   })

   this.photoId = this.photoId + this.id;
   console.log(this.photoId);

   this.photoDetails = this.photos[this.id];
   console.log(this.photoDetails);

  
   this.headerService.headerNav.next(false);
   this.headerService.goBackLink.next({text: 'Back to Gallery', url: '/gallery'});
   
  }

  ngOnDestroy(): void {
    this.headerService.headerNav.next(true);
    this.headerService.goBackLink.next({text: '', url: ''});

  }


}
