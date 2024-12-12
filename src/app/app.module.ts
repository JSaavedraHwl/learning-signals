import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoryoComponent } from './pages/yoryo/yoryo.component';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
