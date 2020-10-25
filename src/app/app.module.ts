import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { routing } from './app.routing';
import { CartComponent } from './component/cart/cart.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { ShopPageComponent } from './component/shop-page/shop-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SingleProductComponent,
    ShopPageComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
