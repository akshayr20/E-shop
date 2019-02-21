import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { BackendModule, AddTokenInterceptor } from '@e-shop/backend';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CommonUiModule } from '@e-shop/common/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { GroceryEShopModule } from '@e-shop/grocery/e-shop';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    GroceryEShopModule,
    BackendModule.forRoot(environment.rootUrl),
    NxModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
