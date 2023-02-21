import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private router:Router , private active:ActivatedRoute , private service:AppService) { }
  id=this.active.snapshot.params['id'];
  score=this.active.snapshot.params['sco']+'/15';

  ngOnInit(): void {
   
    
    
  }
  Result(){
    this.router.navigate(['saveDetails',this.id])

  }

}
