import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { APIService } from '../../services/api.service';
import {PurchaseOrderItem} from '../../swagger-models/model/purchaseOrderItem';
import {LocalstorageService} from '../../services/localstorage.service';
import {Book} from '../../swagger-models/model/book';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  isLoading = false;
  product: Book = {};
  constructor(private route: ActivatedRoute,private router: Router, private location: Location, private apiService: APIService, private localstorageService: LocalstorageService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.isLoading = true;
        return this.apiService.getBook(paramMap.get('id'))
      })
    )
    .subscribe((book: any) => {
      this.isLoading = false;
      this.product = book;
    });
  }

  addToCart() {
    this.localstorageService.pushToCart(this.product);
    console.log("book with id: " + this.product.id + " will be added to the cart");
    console.log('add to cart mock is missing...');
    this.router.navigateByUrl("/cart")
  }

  navigateBack() {
    this.location.back();
  }
}
