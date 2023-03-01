import { Component } from '@angular/core';

import { KASPI_PRODUCTS } from "../../data/shop.data";
import { Product } from "../../models/shop.models"

@Component({
  selector: 'app-products-list-my',
  templateUrl: './products-list-my.component.html',
  styleUrls: ['./products-list-my.component.css']
})
export class ProductsListMyComponent {
  private _products: Array<Product> = KASPI_PRODUCTS;

  constructor(){};

  public get products(): Array<Product> {
    return this._products;
  };
};
