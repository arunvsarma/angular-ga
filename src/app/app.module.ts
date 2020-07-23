import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsService } from './services/analytics.service';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AnalyticsService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
