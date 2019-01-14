import { Component, OnInit } from '@angular/core';
import { sampleCart } from '../cart/sampleCart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear: boolean = false;
  sectionTitles: string [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  cart: any; //todo: use generate type defintions from api

  constructor(private _formBuilder: FormBuilder) {
    this.cart = sampleCart;
    this.sectionTitles = ['Shipping Information', 'Billing Information', 'Order Summary'];
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}
