import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  @Input() formGroup: FormGroup;
  @Input() cart: any;
  constructor(private router: Router) { 
    this.displayedColumns = ['item','quantity','cost'];
  }

  ngOnInit() {}

  handlePlaceOrder() {
    this.router.navigateByUrl('/orderConfirmation');

  }
}
