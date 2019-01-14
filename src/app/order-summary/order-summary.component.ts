import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  @Input() formGroup: FormGroup;
  @Input() cart: any;
  constructor() { 
    this.displayedColumns = ['item','quantity','cost'];
  }

  ngOnInit() {}
}
