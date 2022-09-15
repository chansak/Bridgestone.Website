import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HubConnectionBuilder,HubConnection} from "@microsoft/signalr"

import { AppComponent } from './app.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAlertsComponent } from './pages/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CartService } from './core/services/cart.service';
import { AppSettingsService } from './core/services/app-settings-service.service';
import {SignalrService} from '../app/core/services/signalr.service';



const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  providers: [
    CartService,SignalrService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppSettingsService],
      useFactory: (appConfigService: AppSettingsService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/