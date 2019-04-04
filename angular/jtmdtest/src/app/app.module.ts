import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//# Application
import { HomeComponent } from './components/home/home.component';
import { v_HttpInterceptorProviders } from './interceptors/inde';
import { FiltersComponent } from './components/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    v_HttpInterceptorProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
