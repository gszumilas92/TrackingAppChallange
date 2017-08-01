import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackingMainComponent } from './tracking-main/tracking-main.component';
import { TrackingService } from "./tracking-main/tracking.service";

@NgModule({
  declarations: [
    AppComponent,
    TrackingMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
