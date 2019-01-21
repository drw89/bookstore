import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatStepperModule,
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule { }
