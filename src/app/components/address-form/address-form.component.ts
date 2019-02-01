import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PersonalData} from '../../types';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  addressForm: FormGroup;
  formValid: boolean;
  id: number = 0;
  @Output() handleFormData = new EventEmitter();
  @Output() handleFormValidation = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.addressForm = this.createFormGroup();
    this.formValid = false;
  }

  ngOnInit() {
    this.addressForm.valueChanges.subscribe(() => {
      this.formValid = this.addressForm.valid;
      this.handleFormValidation.emit({id: this.id, valid: this.formValid});
    });
  }

  onSubmit() {
    const personalData: PersonalData = Object.assign({}, this.addressForm.value);
    this.handleFormData.emit(personalData);
  }

  createFormGroup() {
    return this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      stateProvince: new FormControl(),
      postalCode: new FormControl()
    });
  }
}
