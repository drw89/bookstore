import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { BookService} from '../../services/book.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  isLoading = false
  product: any = {};
  constructor(private route: ActivatedRoute, private location: Location, private bookService: BookService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.isLoading = true;
        return this.bookService.getBook(paramMap.get('id'))
      })
    )
    .subscribe((book: any) => {
      this.isLoading = false;
      this.product = book;
    });
  }

  addToCart() {
    console.log("book with id: " + this.product.id + " will be added to the cart");
    console.log('add to cart mock is missing...');
  }

  navigateBack() {
    this.location.back();
  }
}
