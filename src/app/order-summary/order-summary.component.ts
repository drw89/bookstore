import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  displayedColumns: string[];
  thirdFormGroup: FormGroup;
  @Input() cart;
  constructor(private _formBuilder: FormBuilder) { 
    this.displayedColumns = ['item','quantity','cost'];
  }

  ngOnInit() {
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
