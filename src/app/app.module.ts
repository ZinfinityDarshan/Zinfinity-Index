import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { SvgBannerComponent } from './svg-banner/svg-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SvgBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
