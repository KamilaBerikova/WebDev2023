import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsComponent } from "./components/albums/albums.component";
import { HomeComponent } from "./components/home/home.component";
import { AlbumDetailedComponent } from "./components/album-detailed/album-detailed.component";
import { AlbumPhotosComponent } from "./components/album-photos/album-photos.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "albums/:id", component: AlbumDetailedComponent },
  { path: "albums/:id/photos", component: AlbumPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
