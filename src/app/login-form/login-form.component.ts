import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submitted: ', this.formGroup.value);
  }
}
