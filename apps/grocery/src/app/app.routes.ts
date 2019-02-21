import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: '@e-shop/grocery/e-shop#GroceryEShopModule'
  },
  {
    path: 'admin',
    loadChildren: '@e-shop/grocery/admin#GroceryAdminModule'
  },
  {
    path: 'auth',
    loadChildren: '@e-shop/authentication#AuthenticationModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
