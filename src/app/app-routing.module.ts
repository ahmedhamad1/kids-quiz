import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { PreventReloadGuard } from './prevent-reload.guard';
import { ScoreComponent } from './score/score.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }, 
  {
    path: '', component:HomeComponent
   
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
