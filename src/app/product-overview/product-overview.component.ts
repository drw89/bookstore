import { Component, OnInit } from '@angular/core';
import { sampleProducts } from './sampleData';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products;
  constructor() { 
    this.products = sampleProducts;
  }

  ngOnInit() {
  }

}
