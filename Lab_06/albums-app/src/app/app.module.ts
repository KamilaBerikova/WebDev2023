import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HttpService } from "../services/httpService";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumDetailedComponent } from './components/album-detailed/album-detailed.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HomeComponent,
    AlbumDetailedComponent,
    AlbumPhotosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
