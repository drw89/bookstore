import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productSearchOpen: boolean;
  searchTerm: string;
  formGroup: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.productSearchOpen = false;
    this.formGroup = new FormGroup({
      searchTerm: new FormControl(),
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).
    subscribe(input => {
      this.router.navigateByUrl('/products/' + input.searchTerm);
    });
  }

  toggleProductSearch = () => {
    this.productSearchOpen = !this.productSearchOpen;
  }
}
