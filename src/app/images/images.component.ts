import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  time: number = 4;
  timer: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.timer);
        this.router.navigate(['/test']);
      }
    }, 1000);
  }





}
