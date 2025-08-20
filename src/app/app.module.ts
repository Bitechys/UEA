import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BreadcrumComponent } from './common/breadcrum/breadcrum.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { HalalPolicyComponent } from './pages/halal-policy/halal-policy.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { CateringComponent } from './pages/catering/catering.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuImgComponent } from './pages/menu-img/menu-img.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './page/landing/landing.component';
import { MainbtnComponent } from './common/mainbtn/mainbtn.component';
import { MainbtntwoComponent } from './common/mainbtntwo/mainbtntwo.component';
import { RopeHeadingComponent } from './common/rope-heading/rope-heading.component';
import { ProductComponent } from './page/product/product.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    BreadcrumComponent,
    TermsComponent,
    ContactComponent,
    NutritionComponent,
    HalalPolicyComponent,
    FranchiseComponent,
    CateringComponent,
    MenuComponent,
    MenuImgComponent,
    OnlyNumbersDirective,
    LandingComponent,
    MainbtnComponent,
    MainbtntwoComponent,
    RopeHeadingComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxIntlTelInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
