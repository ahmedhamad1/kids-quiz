import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User= new User();
  error=false;
  continuev=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(parseInt (localStorage.getItem("i"))>0){
      this.continuev=true;
     }
  }
  start(f:any){
  
      localStorage.setItem('user',JSON.stringify(this.user));
      this.router.navigate(['/images']);
    
  }
  continue(){
    this.router.navigate(['/test']);
  }
  Restart(){
    localStorage.removeItem("i");
    localStorage.removeItem("user");
    this.continuev=false;
  }

}
