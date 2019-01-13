import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productSearchOpen: boolean;
  constructor() {
    this.productSearchOpen = false;
  }

  ngOnInit() {
  }

  toggleProductSearch = () => {
    this.productSearchOpen = !this.productSearchOpen;
  }
}
