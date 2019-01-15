import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sampleProducts } from './sampleData';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products;
  searchTerm: string;
  constructor(private route: ActivatedRoute) { 
    this.products = sampleProducts;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.searchTerm = paramMap.get('searchTerm')
      console.log(this.searchTerm)
    });
  }

}
