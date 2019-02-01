import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APIService} from '../../services/api.service';
import {LocalstorageService} from '../../services/localstorage.service';
import {switchMap} from 'rxjs/operators';
import {Book} from '../../swagger-models/model/book';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {
  products = [];
  searchTerm: string;
  isLoading = false;
  bookToEdit: Book = {};
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

  addToCart(book: Book) {
    this.localstorageService.pushToCart(book);
    console.log("book with id: " + book.id + " will be added to the cart");
    console.log('add to cart mock is missing...');
  }

  onEdit(book: Book) {
    this.bookToEdit = book;
  }
}
