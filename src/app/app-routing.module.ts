import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, 
  {
    path: 'home', component:HomeComponent
   
  }, 
  {
    path: 'images', component:ImagesComponent
   
  }, 
  {
    path: 'test', component:TestComponent
   
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
