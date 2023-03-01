import { Component } from '@angular/core';

import { products, Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Array<Product> = products;

  public share(id: number): void {
    window.alert(`The product ${id} has been shared!`);
  };

  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  };
}
