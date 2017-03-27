import { Component, HostBinding, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

}
