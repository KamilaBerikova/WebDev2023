import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { ActivatedRoute } from "@angular/router"

import { Product } from '../../models/shop.models';
// import { KASPI_PRODUCTS } from "../../data/shop.data";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
  ) {};

  public shareViaWhatsapp(): void {
    if (this.product) {
      this.document.location.href = `whatsapp://send?text=Buy ${this.product?.name} in Kaspi via link: ${this.product?.kaspiURL}`;
    }
  };

  public notifyAlert(): void {
    if (this.product) alert(`You will be notified about ${this.product.name}`);
  }

  // public ngOnInit(): void {
  //   console.log(this.product)
  //   // First get the product id from the current route.
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productIdFromRoute = Number(routeParams.get('productId'));

  //   // Find the product that correspond with the id provided in route.
  //   this.product = KASPI_PRODUCTS.find(product => product.id === productIdFromRoute);
  //   console.log(this.product);
  // };
};
