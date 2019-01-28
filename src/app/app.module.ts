import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './app.module.angular-material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductTeaserComponent } from './components/product-teaser/product-teaser.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CatalogAdminComponent } from './components/catalog-admin/catalog-admin.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ProductDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    OrderConfirmationComponent,
    CatalogAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
