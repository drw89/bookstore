import {Injectable} from '@angular/core';
import {Book} from '../swagger-models/model/book';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() {
  }


  getCart(): Book[] {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
    }
    return cart;
  }

  pushToCart(book: Book) {
    let cart = this.getCart();
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  saveLoggedInCustomerId(id: number) {
    localStorage.setItem('customer', String(id));
  }

  getLoggedInCustomerId(): number {
    return parseInt(localStorage.getItem('customer'));
  }
}
