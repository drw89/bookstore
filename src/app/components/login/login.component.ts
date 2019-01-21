import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin = false
  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: APIService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(() => {
      this.validLogin = this.loginForm.valid;
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.apiService.authenticateCustomer('fdsfd','dsfdsf')
      .subscribe(() => this.router.navigateByUrl('/cart'));
  }

  navigateToRegistrationPage() {
    this.router.navigateByUrl('/registration');
  }
}
