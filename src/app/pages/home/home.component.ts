import { Component, OnInit } from '@angular/core';
import { FlickrService } from "../../services/flickr.service";
import { FlickrResponseInterface, PhotoInterface } from "../../../classes/flickrInterface";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Array<PhotoInterface> = [];
  maxPages: number;
  scrollDisabled: boolean = false;

  constructor(private service: FlickrService, private spinner: NgxSpinnerService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getPhotos('dog', 1);
  }

  getPhotos(query: string, page: number) {
      this.spinner.show();
      this.scrollDisabled = true;
      this.service.getPhotos(query, page).subscribe((data: FlickrResponseInterface) => {
        this.scrollDisabled = false;
        this.spinner.hide();
        const photos = data.photos.photo;
        this.images = [...this.images.concat(photos)];
        this.maxPages = data.photos.pages;
      });
  };

  onLoadPhotos(event: number) {
    this.getPhotos('dog', event);
  }

}
