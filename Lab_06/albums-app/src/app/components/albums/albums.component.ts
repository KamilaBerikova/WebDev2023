import { Component, OnInit, } from '@angular/core';
import { HttpService } from "../../../services/httpService";

import { Album } from "../../../models/albums.models";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public albums: Array<Album> = [];
  private albumsURL: string = "https://jsonplaceholder.typicode.com/albums";

  constructor(private httpService: HttpService) {};

  public ngOnInit(): void {
    this.fillAlbums(this.albumsURL);
  };

  public fillAlbums(url: string): void {
    this.httpService.getData(url)
      .subscribe((data: Array<Album>) => {
        data.forEach(album => {
          console.log(album);
          let newAlbum: Album = new Album(
            album.userId,
            album.id,
            album.title
          );
          this.albums.push(newAlbum);
        });
      });
  };

  

  public onDelete(id: number): void {
    this.albums.forEach((alb, ind) => {
      if (alb.id === id) this.albums.splice(ind, 1);
    });
  };
}
