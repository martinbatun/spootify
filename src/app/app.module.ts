//main
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

//services
import { HttpConfigInterceptor } from '@ser/api.service';
import { ErrorService } from '@ser/error.service';

//complement and libraries
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DatePipe } from '@angular/common';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from '@dash/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ErrorService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
