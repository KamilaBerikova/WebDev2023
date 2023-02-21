import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Product, KASPI_PRODUCTS } from "../../models/models";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() public product: Product | undefined;

  constructor(private route: ActivatedRoute) {};

  public ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
  
    // Find the product that correspond with the id provided in route.
    this.product= KASPI_PRODUCTS.find(prod => prod.id === productIdFromRoute);
  };
};
