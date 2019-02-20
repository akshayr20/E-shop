import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BackendModule, AddTokenInterceptor } from '@e-shop/backend';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CommonUiModule } from '@e-shop/common/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    BackendModule.forRoot(environment.rootUrl),
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
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
