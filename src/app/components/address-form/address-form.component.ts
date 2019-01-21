import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  formGroup: FormGroup;
  formValid: boolean;
  id: number = 0;
  @Output() handleFormData = new EventEmitter();
  @Output() handleFormValidation = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      stateProvince: new FormControl(),
      postalCode: new FormControl()
    });
    this.formValid = false;
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
