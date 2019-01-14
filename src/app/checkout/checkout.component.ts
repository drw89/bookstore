import { Component, OnInit } from '@angular/core';
import { sampleCart } from '../cart/sampleCart'; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear = false;
  cart;
  constructor() {
    this.cart = sampleCart;
  }

  ngOnInit() {
  }
}
