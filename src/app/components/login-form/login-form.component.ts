import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Login} from '../../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;
  id: number = 2;
  @Input() registrationValid: boolean;
  @Output() handleFormData = new EventEmitter();
  @Output() handleFormValidation = new EventEmitter();
  @Output() createCustomer = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.createFormGroup();
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(() => {
      this.handleFormValidation.emit({id: this.id, valid: this.formGroup.valid});
    });
  }

  onSubmit() {
    const login: Login = Object.assign({}, this.formGroup.value);
    this.handleFormData.emit(login);
    this.createCustomer.emit();
  }

  createFormGroup() {
    return this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
