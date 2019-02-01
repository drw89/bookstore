import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APIService} from '../../services/api.service';
import {CreditCard} from '../../swagger-models/model/creditCard';
import {Login, PersonalData} from '../../types';
import {Customer} from '../../swagger-models/model/customer';
import {Registration} from '../../swagger-models/model/registration';
import {Address} from '../../swagger-models/model/address';
import {CustomerMapper} from '../../mappers/CustomerMapper';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  personalData: PersonalData = new PersonalData();
  creditCard: CreditCard = {};
  login: Login = new Login();
  allFormValidation = [];
  registrationValid = false;

  constructor(private apiService: APIService, private router: Router,) {
    this.sectionTitles = ['Personal Data', 'Payment Data', 'Login Data'];
    this.allFormValidation = [false, false, false];
  }

  ngOnInit() {
  }

  handlePersonalDataForm(values: PersonalData) {
    // merge all form values from all forms
    console.log(values);
    this.personalData = Object.assign(this.personalData, values);
  }

  handleCreditCardForm(values: CreditCard) {
    // merge all form values from all forms
    this.creditCard = Object.assign(this.creditCard, values);

    console.log(this.creditCard);
  }

  handleLoginForm(values: Login) {
    console.log(values);
    // merge all form values from all forms
    this.login = Object.assign(this.login, values);
  }

  handleFormValidation(formValidation: any) {
    this.allFormValidation[formValidation.id] = formValidation.valid;
    this.registrationValid = this.allFormValidation.every(val => val === true);
  }

  createCustomer() {
    const registration = CustomerMapper.mapToRegistration(this.personalData, this.creditCard, this.login);

    this.apiService.registerCustomer(registration).subscribe(() => {
      this.router.navigateByUrl('/cart');
    });
  }
}

