import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  private apiKey: string = '2e0bb4defb9a3952254ab0f6e98734b2';
  private baseUrl: string = 'https://api.flickr.com/services/rest/';

  constructor(private http: HttpClient) { }

  getPhotos(query: string = 'dog', page: number = 1) {
    const url = this.baseUrl+`?method=flickr.photos.search&api_key=${this.apiKey}&tags=${query}&page=${page}&per_page=100&format=json&nojsoncallback=1&extras=description,date_upload,owner_name`;
    return this.http.get(url);
  }


}
