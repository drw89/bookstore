import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component'
 
const routes: Routes = [
  { path: 'products/:searchTerm', component: ProductOverviewComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'orderConfirmation', component: OrderConfirmationComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
