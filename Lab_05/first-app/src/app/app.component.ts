import { Component } from '@angular/core';

import { CATEGORIES_LIST } from "./data/shop.data";
import { Category } from "./models/shop.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _categories: Array<Category> = CATEGORIES_LIST;

  public get categories(): Array<Category> {
    return this._categories;
  };
};
