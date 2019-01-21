import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';

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
  constructor(private apiService: APIService, private router: Router, ) {
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

  createCustomer() {
    this.apiService.registerCustomer(this.allFormValues).subscribe(() => {
      this.router.navigateByUrl('/cart');
    });
  }
}

