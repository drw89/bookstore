import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  formGroup: FormGroup;
  formValid: boolean;
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      stateProvince: new FormControl()
    });
    this.formValid = false;
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.formValid = this.formGroup.valid;
    });
  }

  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
