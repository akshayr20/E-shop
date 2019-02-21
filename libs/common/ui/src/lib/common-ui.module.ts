import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDirectivesModule } from '@e-shop/common/directives';

import { IconComponent } from './icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './navbar/categories/categories.component';
import { NavLinksComponent } from './navbar/nav-links/nav-links.component';
import { KitchenComponent } from './navbar/nav-links/kitchen/kitchen.component';
import { HouseholdComponent } from './navbar/nav-links/household/household.component';
import { ContactUsComponent } from './navbar/nav-links/contact-us/contact-us.component';
import { FaqsComponent } from './navbar/nav-links/faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, CommonDirectivesModule],
  declarations: [
    IconComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    NavLinksComponent,
    KitchenComponent,
    HouseholdComponent,
    ContactUsComponent,
    FaqsComponent,
    HomeComponent
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CommonUiModule {}
