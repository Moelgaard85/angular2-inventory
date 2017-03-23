import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'app/product-item/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  isSelected(item) {
  }

  clicked(item) {
    this.currentProduct = item;
  }

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
