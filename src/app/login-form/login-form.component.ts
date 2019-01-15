import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.handleFormValidation.emit({ id : this.id, valid: this.formGroup.valid });
      this.handleFormData.emit(val);
    });
  }

  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
