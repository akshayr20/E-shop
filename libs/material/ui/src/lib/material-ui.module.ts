import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class MaterialUiModule {}
