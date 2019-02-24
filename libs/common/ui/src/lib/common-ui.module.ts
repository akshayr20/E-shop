import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDirectivesModule } from '@e-shop/common/directives';

import { IconComponent } from './icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SearchBarComponent } from './header/search/search-bar/search-bar.component';
import { CategoriesComponent } from './header/search/categories/categories.component';
import { SearchComponent } from './header/search/search.component';


@NgModule({
  imports: [CommonModule, RouterModule, CommonDirectivesModule],
  declarations: [
    IconComponent,
    HeaderComponent,
    NavbarComponent,
    SearchBarComponent,
    CategoriesComponent,
    SearchComponent,
    FooterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ]
})
export class CommonUiModule {}
