export interface FlickrResponseInterface {
  stat: string;
  photos: PhotosInterface;
}

export interface PhotosInterface {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: Array<PhotoInterface>
}

export interface PhotoInterface {
  dateupload: string;
  description: {
    _content: string;
  }
  farm: number;
  id: string;
  isfamily: number
  isfriend: number
  ispublic: number
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  title: string;
}
