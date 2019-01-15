import {Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  thirdFormGroup: FormGroup;
  allFormValues = {};
  allFormValidation = [];
  registrationValid = false;
  constructor(private _formBuilder: FormBuilder) {
    this.sectionTitles = ['Personal Data', 'Payment Data', 'Login Data'];
    this.allFormValidation = [false, false, false];
  }

  ngOnInit() {
  }

  handleFormData(values: any) {
    // merge all form values from all forms
    this.allFormValues = Object.assign(this.allFormValues, values);
  }

  handleFormValidation(formValidation: any) {
    this.allFormValidation[formValidation.id] = formValidation.valid;
    this.registrationValid = this.allFormValidation.every(val => val === true);
  }
}

