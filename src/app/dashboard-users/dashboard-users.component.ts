import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
list:any;
  constructor(private us:AppService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.us.getAllU().subscribe(res=>{
      this.list=res, 
      console.log(this.list);
     

      
     console.log(this.list)
    })
  }

}
