import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productSearchOpen: boolean;
  searchTerm: string;
  constructor(private router: Router) {
    this.productSearchOpen = false;
  }

  ngOnInit() {
  }

  toggleProductSearch = () => {
    this.productSearchOpen = !this.productSearchOpen;
  }

  startProductSearch = () => {
    this.router.navigateByUrl('/products/' + this.searchTerm);
  }
}
