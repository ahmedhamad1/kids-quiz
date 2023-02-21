import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { TestComponent } from './test/test.component';
import { RandomizePipe } from './randomize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesComponent,
    TestComponent,
    RandomizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
