import { Component, OnInit } from '@angular/core';
import { sampleCart } from './sampleCart'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart;
  displayedColumns: string[];
  constructor(private router: Router) {
    this.cart = sampleCart;
    this.displayedColumns = ['item','quantity','cost'];
  }

  ngOnInit() {
  }

  navigateToCart() {
    this.router.navigateByUrl('/checkout');
  }
}
