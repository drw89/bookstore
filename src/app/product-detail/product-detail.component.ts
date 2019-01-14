import { Component, OnInit } from '@angular/core';
import { sampleProduct } from './sampleProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor() {
    this.product = sampleProduct;
  }

  ngOnInit() {
  }
}
