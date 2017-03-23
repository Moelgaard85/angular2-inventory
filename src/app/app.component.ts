import { Component, EventEmitter } from '@angular/core';
import { Product } from 'app/product-item/product';


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
        'imageUrl': 'http://image.dk',
        'department': ['Bukser', 'Tøj'],
        'price': 125
      }),
      new Product({
        'sku': 523234,
        'name': 'Smart Cardigan',
        'imageUrl': 'http://image.dk',
        'department': ['Bluse', 'Tøj'],
        'price': 495
      }),
      new Product({
        'sku': 5323234,
        'name': 'Blå Master',
        'imageUrl': 'http://image.dk',
        'department': ['Kasket', 'Tøj'],
        'price': 99
      })
    ];
  }

  productWasSelected(product): void {
    console.log('productWasSelected: ', product);
  }


}
