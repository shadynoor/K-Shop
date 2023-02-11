import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { ProductCardComponent } from './new-products/product-card/product-card.component';
import { SlicePipe } from './pipes/slice.pipe';
import { RecentlyViewedProductComponent } from './recently-viewed/recently-viewed-product/recently-viewed-product.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    NewProductsComponent,
    RecentlyViewedComponent,
    ProductCardComponent,
    SlicePipe,
    RecentlyViewedProductComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
