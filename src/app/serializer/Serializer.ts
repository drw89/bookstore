import {Customer} from '../swagger-models/model/customer';
import {Book} from '../swagger-models/model/book';
import {BookId, CustomerId} from '../types';
import {SalesOrder} from '../swagger-models/model/salesOrder';
import {SalesOrderItem} from '../swagger-models/model/salesOrderItem';
import {Address} from '../swagger-models/model/address';
import {CreditCard} from '../swagger-models/model/creditCard';
import {BookInfo} from '../swagger-models/model/bookInfo';

export class Serializer {

  fromJsonToBook(json: any): Book {
    return {
      authors: json.authors,
      description: json.description,
      id: json.id,
      imageUrl: json.imageUrl,
      isbn: json.isbn,
      numberOfPages: json.numberOfPages,
      price: json.price,
      publicationYear: json.publicationYear,
      publisher: json.publicationYear,
      subtitle: json.subtitle,
      title: json.title
    };
  }

  fromJsonToBookInfo(json: any): BookInfo {
    return {
      authors: json.authors,
      id: json.id,
      isbn: json.isbn,
       price: json.price,
      title: json.title
    };
  }

  fromJsonToCustomerId(json: any): CustomerId {
    return {
      id: json
    };
  }

  fromJsonToBookId(json: any): BookId{
    return {
      id: json
    };
  }

  fromJsonToSalesOrder(json: any): SalesOrder {
    return {
      address: this.fromJsonToAddress(json.address),
      amount: json.amount,
      creditCard: this.fromJsonToCreditCard(json.creditCard),
      customer: this.fromJsonToCustomerInfo(json.customer),
      date: json.date,
      id: json.id,
      items: this.fromJsonToSalesOrderItem(json.items),
      status: json.status
    };
  }

  fromJsonToSalesOrderItem(json: any[]): SalesOrderItem[] {
    const items: SalesOrderItem[] = [];
    json.forEach(value => {
      items.push({
        book: this.fromJsonToBook(value.book),
        price: value.price,
        quantity: value.quantity
      });
    });

    return items;
  }

  fromJsonToAddress(json: any): Address {
    return {
      street: json.street,
      stateProvince: json.stateProvince,
      postalCode: json.postalCode,
      country: json.country,
      city: json.city
    };
  }

  fromJsonToCreditCard(json: any): CreditCard {
    return {
      expirationMonth: json.expirationMonth,
      expirationYear: json.expirationYear,
      number: json.number,
      type: json.type
    };
  }

  fromJsonToCustomerInfo(json: any): Customer {
    return {
      email: json.email,
      firstName: json.firstName,
      id: json.id,
      lastName: json.lastName
    };
  }
}
