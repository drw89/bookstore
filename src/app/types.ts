export class Book {
  title: string;
  subtitle: string;
  isbn: string;
  authors: string;
  description: string;
  imageUrl: string;
  numberOfPages: number;
  price: number;
  publicationYear: number;
  publisher: string;
}

export class Login {
  email: string;
  password: string;
}

export class PersonalData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  country: string;
  stateProvince: string;
  postalCode: string;
}

export class CreditCard {
  type: CreditCardType;
  number: number;
  expirationMonth: number;
  expirationYear: number;

}

export enum CreditCardType {
  MASTERCARD,
  VISA
}

export class Registration {
  customer: Customer;
  password: string;
}

export class Customer {
  address: Address;
  creditCard: CreditCard;
  email: string;
  firstName: string;
  lastName: string;
}

export class Address {
  city: string;
  country: string;
  postalCode: string;
  stateProvince: string;
  street: string;
}
