import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  isSelected(item: Product): boolean {
    if (!item || !this.currentProduct) {
      return false;
    }
    return item.sku === this.currentProduct.sku;
  }

  clicked(item: Product): void {
    this.currentProduct = item;
    this.onProductSelected.emit(item);
  }

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

}
