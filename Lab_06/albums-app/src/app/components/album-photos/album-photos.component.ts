import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { AlbumPhoto } from "../../../models/albums.models";

import { HttpService } from "../../../services/httpService";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  public albumPhotos: Array<AlbumPhoto> = [];
  public sub: Subscription;
  private _albumId: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpSerivice: HttpService
  ) {
    this.sub = activatedRoute.params.subscribe(params => {
      this._albumId = params['id'];
    });
  };

  public ngOnInit(): void {
    this.fillPhotos();
  };

  public fillPhotos(): void {
    this.httpSerivice.getAlbumPhotos(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe((data: Array<AlbumPhoto>) => {
        data.forEach(data => {
          let albPhoto: AlbumPhoto = new AlbumPhoto(
            data.albumId,
            data.id,
            data.title,
            data.url,
            data.thumbnailUrl
          );

          this.albumPhotos.push(albPhoto);
        });
      });
  };

  public get albumId(): number {
    return this._albumId;
  }
}
