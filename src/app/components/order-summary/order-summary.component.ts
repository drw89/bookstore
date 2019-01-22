import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  formGroup: FormGroup;
  shippingAddress: any;
  @Input() cart: any;
  @Input() checkoutValid: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.displayedColumns = ['item','quantity','cost'];
    this.formGroup = new FormGroup({});
    this.shippingAddress = {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateProvince": "string",
      "street": "string"
    };
  }

  ngOnInit() {}

  handlePlaceOrder() {
    this.router.navigateByUrl('/orderConfirmation');

  }
}
