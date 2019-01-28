import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {CreditCard} from '../../types';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  formValid: boolean = false;
  id: number = 1;
  @Output() handleFormData = new EventEmitter();
  @Output() handleFormValidation = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.paymentForm = this.createFormGroup();
  }

  ngOnInit() {
    this.paymentForm.valueChanges.subscribe(() => {
      this.formValid = this.paymentForm.valid;
      this.handleFormValidation.emit({ id : this.id, valid: this.formValid });
    });
  }

  onSubmit() {
    const creditCard: CreditCard = Object.assign({}, this.paymentForm.value);
    console.log('submitted: ', creditCard);
    this.handleFormData.emit(creditCard);
  }

  createFormGroup() {
    return this.formBuilder.group({
      creditCardType: new FormControl(),
      creditCardNumber: new FormControl(),
      expirationMonth: new FormControl(),
      expirationYear: new FormControl()
    });
  }
}
