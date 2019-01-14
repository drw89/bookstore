import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatInputModule, MatCardModule, MatRadioModule, MatStepperModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ProductTeaserComponent } from './product-teaser/product-teaser.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ProductTeaserComponent,
    ProductOverviewComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    CheckoutComponent,
    AddressFormComponent,
    PaymentFormComponent,
    OrderSummaryComponent,
    LoginFormComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
