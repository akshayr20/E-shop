import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveImageComponent } from './responsive-image/responsive-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResponsiveImageComponent],
  exports: [ResponsiveImageComponent]
})
export class CommonUiModule {}
