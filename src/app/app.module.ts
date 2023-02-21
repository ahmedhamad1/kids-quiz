import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { TestComponent } from './test/test.component';
import { RandomizePipe } from './randomize.pipe';
import { ScoreComponent } from './score/score.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DetailsComponent } from './details/details.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesComponent,
    TestComponent,
    RandomizePipe,
    ScoreComponent,
    DashboardUsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
