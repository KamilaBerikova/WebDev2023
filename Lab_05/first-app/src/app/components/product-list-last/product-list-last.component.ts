import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Category, Product } from "../../models/shop.models";
import { CATEGORIES_LIST } from "../../data/shop.data";


@Component({
  selector: 'app-product-list-last',
  templateUrl: './product-list-last.component.html',
  styleUrls: ['./product-list-last.component.css']
})
export class ProductListLastComponent implements OnInit {
  private _category_products: Array<Product> = [];
  private _current_category?: Category;

  constructor(private route: ActivatedRoute) {};

  public ngOnInit(): void {
    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const categoryId: number = Number(routeParams.get("categoryId"));
    this._current_category = CATEGORIES_LIST.filter((cat) => cat.id == categoryId)[0];
    this._category_products = this._current_category.productList.filter((prod) => prod.isDeleted == false);
  };

  public get category_products(): Array<Product> {
    return this._category_products;
  };

  public get current_category(): Category | undefined {
    return this._current_category;
  };
};
