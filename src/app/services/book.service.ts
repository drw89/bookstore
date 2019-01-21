import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

const backendUrl = 'http://distsys.ch:10080/api/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  /*
  getBook(bookID: string): Observable<Book> {
    return this.http.get(`${backendUrl}findBook?id=${bookID}`)
      .pipe(
        catchError(this.handleError)
      );
  }*/

  searchForBooks(searchTerm: string): Observable<Object> {
    return this.http.get(`${backendUrl}searchBooks?keywords=${searchTerm}`)
      .pipe(
        map((val: []) => {
          return val.map(jsonBook => jsonBook)
        })
      );
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }
}
