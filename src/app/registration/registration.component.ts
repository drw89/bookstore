import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  allFormValues = {};
  allFormValidation = [];
  registrationValid = false;
  constructor() {
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

