import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Book} from '../../swagger-models/model/book';
import {PersonalData} from '../../types';
import {CreditCard} from '../../swagger-models/model/creditCard';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  formGroup: FormGroup;
  @Input() books: Book[];
  @Input() personalData: PersonalData;
  @Input() billingInformation: CreditCard;
  @Input() checkoutValid: boolean;
  @Output() placeOrder = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.displayedColumns = ['item','cost'];
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {}

  getAmount(): number {
    let amount = 0;
    if (this.books != null) {
      this.books.forEach(book => amount += book.price);
    }
    return amount;
  }

  handlePlaceOrder() {
    this.placeOrder.emit();
  }
}
