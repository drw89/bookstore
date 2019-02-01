import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../../swagger-models/model/book';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[];

  constructor(private router: Router, private localstorageService: LocalstorageService) {
    this.books = localstorageService.getCart();
    this.displayedColumns = ['item', 'cost'];
  }

  getAmount(): number {
    let amount = 0;
    if (this.books != null) {
      this.books.forEach(book => amount += book.price);
    }
    return amount;
  }

  ngOnInit() {
  }

  navigateToCart() {
    this.router.navigateByUrl('/checkout');
  }
}
