import { DOCUMENT } from '@angular/common';
import { Component, Input, Inject } from '@angular/core';

import { Product } from "../../models/shop.models"; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {};

  public shareViaWhatsapp(): void {
    if (this.product) {
      this.document.location.href = `whatsapp://send?text=Buy ${this.product?.name} in Kaspi via link: ${this.product?.kaspiURL}`;
    }
  };

  public like(): void {
    if (this.product) this.product.likeProduct();
  };

  public delProd(): void {
    if (this.product) {
      this.product.deleteProd();
      delete this.product;
    };
  };
};
