import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos  :any;

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit(): void {
   
 this.photos =   this.galleryService.photos;
    console.log(this.photos);
    
  }
  viewImage(id:any){
    console.log(id);
  }

}
