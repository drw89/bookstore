import { Component, OnInit } from '@angular/core';
import { sampleProduct } from './sampleProduct';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(private location: Location) {
    this.product = sampleProduct;
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }
}
