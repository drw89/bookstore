import {Component, OnInit} from '@angular/core';
import {flatMap} from 'rxjs/operators';
import {Router} from '@angular/router';

import {sampleCart} from '../cart/sampleCart';
import {APIService} from '../../services/api.service';
import {PersonalData} from '../../types';
import {CreditCard} from '../../swagger-models/model/creditCard';
import {CustomerMapper} from '../../mappers/CustomerMapper';
import {PurchaseOrder} from '../../swagger-models/model/purchaseOrder';
import {Book} from '../../swagger-models/model/book';
import {LocalstorageService} from '../../services/localstorage.service';
import {PurchaseOrderItem} from '../../swagger-models/model/purchaseOrderItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  personalData: PersonalData = new PersonalData();
  billingInformation: CreditCard = {};
  books: Book[] = [];
  allFormValidation = [];
  checkoutValid = false;

  constructor(private apiService: APIService, private router: Router, private localstorageService: LocalstorageService) {
    this.books = localstorageService.getCart();
    this.sectionTitles = ['Shipping Information', 'Billing Information', 'Order Summary'];
    this.allFormValidation = [false, false];
  }

  ngOnInit() {
  }

  handlePersonalDataForm(values: PersonalData) {
    // merge all form values from all forms
    console.log(values);
    this.personalData = Object.assign(this.personalData, values);
  }

  handleBillingInformationForm(values: CreditCard) {
    // merge all form values from all forms
    this.billingInformation = Object.assign(this.billingInformation, values);
  }

  handleFormValidation(formValidation: any) {
    this.allFormValidation[formValidation.id] = formValidation.valid;
    this.checkoutValid = this.allFormValidation.every(val => val === true);
  }

  placeOrder() {
    const customerId = this.localstorageService.getLoggedInCustomerId();
    let purchaseOrderItem: PurchaseOrderItem[] = [];

    this.books.forEach(book => purchaseOrderItem.push({isbn: book.isbn, quantity: 1}));
    const purchaseOrder: PurchaseOrder = {
      customerId: customerId,
      items: purchaseOrderItem
    }

    this.apiService.placeOrder(purchaseOrder).subscribe(
      () => this.router.navigateByUrl('/orderConfirmation')
    );
  }
}
