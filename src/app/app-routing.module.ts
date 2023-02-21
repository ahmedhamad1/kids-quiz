import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';

import { ScoreComponent } from './score/score.component';
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
  {
    path: 'dashboradUsers', component:DashboardUsersComponent 
   
  }, 
  {
    path: 'saveDetails/:id', component:DetailsComponent 
   
  }, 
  {
    path: 'score/:sco/:id', component:ScoreComponent
   
  }, 
  {
    path: '**', redirectTo:'home' 
   
  },

];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: true
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
