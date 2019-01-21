import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, catchError, switchMap } from 'rxjs/operators';

import { BookService} from '../../services/book.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products = [];
  searchTerm: string;
  isLoading = false;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.isLoading = true;
        this.searchTerm = paramMap.get('searchTerm');
        return this.bookService.searchForBooks(this.searchTerm)
      })
    )
    .subscribe((books: any) => {
      this.isLoading = false;
      this.products = books
    });
  }
}
