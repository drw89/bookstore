import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {HttpHeaders} from '@angular/common/http';
import {BookId, CustomerId, Login} from '../types';
import {Registration} from '../swagger-models/model/registration';
import {Customer} from '../swagger-models/model/customer';
import {Book} from '../swagger-models/model/book';
import {PurchaseOrder} from '../swagger-models/model/purchaseOrder';
import {SalesOrder} from '../swagger-models/model/salesOrder';
import {Serializer} from '../serializer/Serializer';
import {BookInfo} from '../swagger-models/model/bookInfo';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private serializer = new Serializer();

  private backendUrl = 'http://distsys.ch:10080/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  getBook(bookID: string): Observable<Book> {
    return this.http.get<Book>(`${this.backendUrl}findBook?id=${bookID}`)
      .pipe(
        map(data => this.serializer.fromJsonToBook(data)),
        catchError(this.handleError)
      );
  }

  searchForBooks(searchTerm: string): Observable<BookInfo[]> {
    return this.http.get<BookInfo[]>(`${this.backendUrl}searchBooks?keywords=${searchTerm}`)
      .pipe(
        map((val: []) => {
          return val.map(jsonBook => this.serializer.fromJsonToBookInfo(jsonBook));
        }),
        catchError(this.handleError)
      );
  }

  authenticateCustomer(login: Login): Observable<CustomerId> {
    return this.http.get<CustomerId>(`${this.backendUrl}authenticateCustomer?email=${login.email}&password=${login.password}`)
      .pipe(
        map(value => this.serializer.fromJsonToCustomerId(value)),
        catchError(this.handleError)
      );
  }

  placeOrder(purchaseOrder: PurchaseOrder): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.backendUrl}placeOrder`, purchaseOrder)
      .pipe(
        map(value => this.serializer.fromJsonToSalesOrder(value)),
        catchError(this.handleError)
      );
  }

  registerCustomer(registration: Registration): Observable<CustomerId> {
    return this.http.post<CustomerId>(`${this.backendUrl}registerCustomer`, registration, this.httpOptions).pipe(
      map(value => this.serializer.fromJsonToCustomerId(value)),
      catchError(this.handleError)
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put(`${this.backendUrl}updateCustomer`, customer, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addBook(book: Book): Observable<BookId> {
    return this.http.post<BookId>(`${this.backendUrl}addBook`, book, this.httpOptions).pipe(
      map(value => {
        console.log(value);
        return this.serializer.fromJsonToBookId(value)
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }
}
