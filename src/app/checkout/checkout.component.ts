import { Component, OnInit } from '@angular/core';
import { sampleCart } from '../cart/sampleCart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  cart: any; //todo: use generate type defintions from api
  allFormValues = {};
  allFormValidation = [];
  checkoutValid = false;

  constructor() {
    this.cart = sampleCart;
    this.sectionTitles = ['Shipping Information', 'Billing Information', 'Order Summary'];
    this.allFormValidation = [false, false];
  }

  ngOnInit() {
  }

  handleFormData(values: any) {
    // merge all form values from all forms
    this.allFormValues = Object.assign(this.allFormValues, values);
  }

  handleFormValidation(formValidation: any) {
    this.allFormValidation[formValidation.id] = formValidation.valid;
    this.checkoutValid = this.allFormValidation.every(val => val === true);
  }
}
