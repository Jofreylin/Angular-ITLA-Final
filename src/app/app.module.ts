import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgxMaskModule } from 'ngx-mask';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
