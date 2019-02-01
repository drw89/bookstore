import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APIService} from '../../services/api.service';
import {Address, CreditCard, Customer, Login, PersonalData, Registration} from '../../types';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  allFormValues = {};
  personalData: PersonalData = new PersonalData();
  creditCard: CreditCard = new CreditCard();
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
    console.log(values);
    // merge all form values from all forms
    this.creditCard = Object.assign(this.creditCard, values);
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
    console.log(this.personalData);
    console.log(this.creditCard);
    console.log(this.login);
    const customer: Customer = new Customer();
    customer.firstName = this.personalData.firstName;
    customer.lastName = this.personalData.lastName;
    customer.address = new Address();
    customer.address.city = this.personalData.city;
    customer.address.country = this.personalData.country;
    customer.address.postalCode = this.personalData.postalCode;
    customer.address.stateProvince = this.personalData.stateProvince;
    customer.email = this.login.email;
    customer.address.street = this.personalData.street;
    customer.creditCard = new CreditCard();
    customer.creditCard = this.creditCard;
    console.log(customer);

    const registration: Registration = new Registration();

    registration.customer = Object.assign({}, customer);
    registration.password = this.login.password;

    console.log(registration);

    this.apiService.registerCustomer(registration).subscribe(() => {
      this.router.navigateByUrl('/cart');
    });
  }
}

