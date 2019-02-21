import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveImageComponent } from './responsive-image/responsive-image.component';
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

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResponsiveImageComponent,
    IconComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    NavLinksComponent,
    KitchenComponent,
    HouseholdComponent,
    ContactUsComponent,
    FaqsComponent
  ],
  exports: [
    ResponsiveImageComponent,
    IconComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CommonUiModule {}
