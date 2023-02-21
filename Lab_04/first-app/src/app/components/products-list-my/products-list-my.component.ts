import { Component } from '@angular/core';

import { Product, KASPI_PRODUCTS } from "../../models/models";

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
