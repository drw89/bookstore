import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';
import {Book, Login} from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

const mapCustomerFieldsV2 = (formData: any) => {
  const {
    city,
    country,
    creditCardNumber,
    creditCardType,
    email,
    expirationMonth,
    expirationYear,
    firstName,
    lastName,
    password,
    stateProvince,
    street,
    postalCode,
  } = formData;

  return {
    "address": {
      city,
      country,
      postalCode,
      stateProvince,
      street
    },
    "creditCard": {
      expirationMonth,
      expirationYear,
      "number": creditCardNumber,
      "type": creditCardType
    },
    email,
    firstName,
    lastName,
    "id": 0,
    password
  }
};

const backendUrl = 'http://distsys.ch:10080/api/';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getBook(bookID: string): Observable<Object>  {
    return this.http.get(`${backendUrl}findBook?id=${bookID}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  searchForBooks(searchTerm: string): Observable<Object> {
    return this.http.get(`${backendUrl}searchBooks?keywords=${searchTerm}`)
      .pipe(
        map((val: []) => {
          return val.map(jsonBook => jsonBook)
        }),
        catchError(this.handleError)
      );
  }

  authenticateCustomer(login: Login) : Observable<Object> {
    return this.http.get(`${backendUrl}authenticateCustomer?email=${login.email}&password=${login.password}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  placeOrder(cart: any) : Observable<Object> {
    return this.http.post(`${backendUrl}placeOrder`, { customerId: 0, ...cart})
      .pipe(
        catchError(this.handleError)
      );
  }

  registerCustomer(formData: any) : Observable<Object> {
    return this.http.post(`${backendUrl}registerCustomer`, formData, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateCustomer(formData: any) : Observable<Object> {
    return this.http.put(`${backendUrl}updateCustomer`, mapCustomerFieldsV2(formData), httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addBook(book: Book) : Observable<Object> {
    return this.http.post(`${backendUrl}addBook`, book, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }
}
