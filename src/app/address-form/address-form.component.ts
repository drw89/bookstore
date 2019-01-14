import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  formGroup: FormGroup;
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
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
