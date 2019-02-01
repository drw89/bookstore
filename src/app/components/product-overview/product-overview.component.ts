import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { APIService} from '../../services/api.service';
import {PurchaseOrderItem} from '../../swagger-models/model/purchaseOrderItem';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products = [];
  searchTerm: string;
  isLoading = false;
  constructor(private route: ActivatedRoute, private apiService: APIService, private localstorageService: LocalstorageService) { }

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

  addToCart(book: any) {
    this.localstorageService.pushToCart(book);
    alert("book with id: " + book.id + " will be added to the cart");
  }
}
