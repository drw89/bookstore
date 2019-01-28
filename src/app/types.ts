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
  postalCode: number;
}

export class CreditCard {
  creditCardType: CreditCardType;
  number: number;
  expirationMonth: number;
  expirationYear: number;

}

export enum CreditCardType {
  MASTERCARD,
  VISA
}
