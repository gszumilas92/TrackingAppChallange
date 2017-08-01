import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackingMainComponent } from './tracking-main/tracking-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
