import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { HttpService } from "../../../services/httpService";

import { Album } from "../../../models/albums.models";

@Component({
  selector: 'app-album-detailed',
  templateUrl: './album-detailed.component.html',
  styleUrls: ['./album-detailed.component.scss']
})
export class AlbumDetailedComponent implements OnInit {
  public album: Album | undefined;
  public sub: Subscription;
  public albumId: number = -1;
  private static albumURL: string = "https://jsonplaceholder.typicode.com/albums/";

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpSerivice: HttpService
  ) {
    this.sub = activatedRoute.params.subscribe(params => {
      this.albumId = params['id'];
    });
  };
  
  public ngOnInit(): void {
    this.fillAlbum(AlbumDetailedComponent.albumURL);
  };

  public fillAlbum(ulr: string): void {
    let albUrl: string = ulr + this.albumId;
    this.httpSerivice.getDetailed(albUrl).subscribe((data: Album) => {
      this.album = new Album(data.userId, data.id, data.title);
    });
  };

  public saveBtnClick(title: string): void {
    if (this.album) {
      this.album.title = title;
      alert("Succesffully saved");
    }
  };
;

  
}
