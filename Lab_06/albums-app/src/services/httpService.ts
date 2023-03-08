import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Album, AlbumPhoto, } from "../models/albums.models";

@Injectable() 
export class HttpService {
    constructor(private http: HttpClient) { };

    public getData(url: string): Observable<Album[]> {
        return this.http.get<Array<Album>>(url);
    };

    getAlbumPhotos(url: string): Observable<AlbumPhoto[]> {
        return this.http.get<Array<AlbumPhoto>>(url);
    }

    public getDetailed(url: string): Observable<Album> {
        return this.http.get<Album>(url);
    };
};