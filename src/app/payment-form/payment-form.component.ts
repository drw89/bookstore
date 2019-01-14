import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      creditCardType: new FormControl(),
      creditCardNumber: new FormControl(),
      expirationMonth: new FormControl(),
      expirationYear: new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
