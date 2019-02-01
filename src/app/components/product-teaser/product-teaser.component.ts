import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bloomHasToken } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-product-teaser',
  templateUrl: './product-teaser.component.html',
  styleUrls: ['./product-teaser.component.scss']
})
export class ProductTeaserComponent implements OnInit {

  @Input() book;
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addBookToCart() {
    this.addToCart.emit(this.book);
  }
}
