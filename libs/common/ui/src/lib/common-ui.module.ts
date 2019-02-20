import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveImageComponent } from './responsive-image/responsive-image.component';
import { IconComponent } from './icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponsiveImageComponent, IconComponent, HeaderComponent, FooterComponent],
  exports: [ResponsiveImageComponent, IconComponent]
})
export class CommonUiModule {}
