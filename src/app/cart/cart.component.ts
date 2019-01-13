import { Component, OnInit } from '@angular/core';
import { sampleCart } from './sampleCart'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart;
  displayedColumns: string[];
  constructor() {
    this.cart = sampleCart;
    this.displayedColumns = ['item','quantity','cost'];
  }

  ngOnInit() {
  }
}
