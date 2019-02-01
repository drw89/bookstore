import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {LoginComponent} from './components/login/login.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {HomeComponent} from './components//home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {CatalogAdminComponent} from './components/catalog-admin/catalog-admin.component';
import {AdminOverviewComponent} from './components/admin-overview/admin-overview.component';

const routes: Routes = [
  {path: 'products/:searchTerm', component: ProductOverviewComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'orderConfirmation', component: OrderConfirmationComponent},
  {path: 'admin', component: AdminOverviewComponent},
  {path: 'admin/edit', component: CatalogAdminComponent},
  {path: 'admin/add', component: CatalogAdminComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
