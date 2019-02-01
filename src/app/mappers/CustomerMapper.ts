import {Address} from '../swagger-models/model/address';
import {CreditCard} from '../swagger-models/model/creditCard';
import {Customer} from '../swagger-models/model/customer';
import {Registration} from '../swagger-models/model/registration';
import {Login, PersonalData} from '../types';

export class CustomerMapper {

  static mapToRegistration(personalData: PersonalData, creditCard: CreditCard, login: Login) {

    const address: Address = {
      city: personalData.city,
      country: personalData.country,
      postalCode: personalData.postalCode,
      stateProvince: personalData.stateProvince,
      street: personalData.street

    };

    const customer: Customer = {
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      address: address,
      email: login.email,
      creditCard: creditCard
    };

    return {
      customer: customer,
      password: login.password
    };
  }
}
