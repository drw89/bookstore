import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { APIService} from '../../services/api.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products = [];
  searchTerm: string;
  isLoading = false;
  constructor(private route: ActivatedRoute, private apiService: APIService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.isLoading = true;
        this.searchTerm = paramMap.get('searchTerm');
        return this.apiService.searchForBooks(this.searchTerm)
      })
    )
    .subscribe((books: any) => {
      this.isLoading = false;
      this.products = books
    });
  }

  addToCart(id: string) {
    console.log("book with id: " + id + " will be added to the cart");
    console.log('add to cart mock is missing...');
  }
}
