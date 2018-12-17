import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images: Array<any>;
  @Input() disabled: boolean = false;
  @Input() maxPages: number;
  @Output() loadPhotos: EventEmitter<number> = new EventEmitter<number>();

  page: number = 1;

  constructor(private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onScrolled() {
    if(this.maxPages >= this.page) {
      this.page++;
      this.loadPhotos.emit(this.page);
    } else {
      this.toastr.error('Loaded all images already')
    }
  }



}
