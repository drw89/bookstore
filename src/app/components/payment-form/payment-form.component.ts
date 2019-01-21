import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  formGroup: FormGroup;
  formValid: boolean = false;
  id: number = 1;
  @Output() handleFormData = new EventEmitter();
  @Output() handleFormValidation = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      creditCardType: new FormControl(),
      creditCardNumber: new FormControl(),
      expirationMonth: new FormControl(),
      expirationYear: new FormControl()
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.formValid = this.formGroup.valid;
      this.handleFormValidation.emit({ id : this.id, valid: this.formValid });
      this.handleFormData.emit(val);
    });
  }


  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
