import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {APIService} from '../../services/api.service';
import {Login} from '../../types';
import {LocalstorageService} from '../../services/localstorage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: APIService, private localstorageService: LocalstorageService) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(() => {
      this.validLogin = this.loginForm.valid;
    });
  }

  onSubmit() {
    const login: Login = Object.assign({}, this.loginForm.value);
    this.apiService.authenticateCustomer(login)
      .subscribe(response => {
        this.localstorageService.saveLoggedInCustomerId(response.id);
        this.router.navigateByUrl('/cart')
      });
  }

  navigateToRegistrationPage() {
    this.router.navigateByUrl('/registration');
  }

  createFormGroup() {
    return this.formBuilder.group({
        email: new FormControl(),
        password: new FormControl()
      }
    );
  }
}
