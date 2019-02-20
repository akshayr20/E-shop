import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveImageComponent } from './responsive-image/responsive-image.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponsiveImageComponent, IconComponent],
  exports: [ResponsiveImageComponent, IconComponent]
})
export class CommonUiModule {}
