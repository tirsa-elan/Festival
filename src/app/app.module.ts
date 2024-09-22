import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LouderComponent } from './core/pre-louder/louder/louder.component';
import { HeaderComponent } from './core/component/header/header.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { TicketComponent } from './core/component/ticket/ticket.component';
import { ShowEventComponent } from './core/component/show-event/show-event.component';
import { RentVenuComponent } from './core/component/rent-venu/rent-venu.component';
import { AboutUsComponent } from './core/component/about-us/about-us.component';
import { HomeComponent } from './core/component/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LouderComponent,
    HeaderComponent,
    FooterComponent,
    TicketComponent,
    ShowEventComponent,
    RentVenuComponent,
    AboutUsComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
