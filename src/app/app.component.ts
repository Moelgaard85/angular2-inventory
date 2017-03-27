import { Component, EventEmitter } from '@angular/core';
import { Product } from 'app/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product({
        'sku': 123234,
        'name': 'Jeans Black',
        'imageUrl': 'src/assets/images/products/black-hat.jpg',
        'department': ['Bukser', 'Tøj'],
        'price': 125
      }),
      new Product({
        'sku': 523234,
        'name': 'Smart Cardigan',
        'imageUrl': 'src/assets/images/products/black-shoes.jpg',
        'department': ['Bluse', 'Tøj', 'Bluser'],
        'price': 495
      }),
      new Product({
        'sku': 5323234,
        'name': 'Blå Master',
        'imageUrl': 'src/assets/images/products/blue-jacket.jpg',
        'department': ['Kasket'],
        'price': 99
      })
    ];
  }

  productWasSelected(product): void {
    console.log('productWasSelected: ', product);
  }


}
