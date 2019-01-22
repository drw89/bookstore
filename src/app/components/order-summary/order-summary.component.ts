import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  formGroup: FormGroup;
  @Input() cart: any;
  @Input() formValues: any;
  @Input() checkoutValid: boolean;
  @Output() placeOrder = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.displayedColumns = ['item','quantity','cost'];
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {}

  handlePlaceOrder() {
    this.placeOrder.emit();
  }
}
