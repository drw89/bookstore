import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
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

  authenticateCustomer(email: string, password: string) : Observable<Object> {
    return this.http.get(`${backendUrl}authenticateCustomer?email=${email}&password=${password}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  registerCustomer(formData: any) : Observable<Object> {
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

    const customer = {
      "customer": {
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
      },
      password
    }
    return this.http.post(`${backendUrl}registerCustomer`, customer, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }
}
