import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
user:User=new User();
indd= Math.floor(Math.random() *7)
i=0;

tab=[ {
  order:1, question:'What was the man wearing ?' , answers:[{
    name:'Earmuffs' , img:'./assets/earmuffs.jpg'
  },{
    name:'Scarf',img:'./assets/scarf.jpeg'
  },{
    name:'Hat',img:'./assets/hat.jpg'
  },{
    name:'Airpods', img:'./assets/airpods.jpeg'
  },{
  name:'Earrings',img:'./assets/earrings.jpeg'
  }
 
  ],correct:'Airpods'
} ,
{
order:2,question:'What was the cat playing with ?', answers:[
  {name:'A tennis ball', img:'./assets/tennis.jpeg'},
  {name:'A sock ', img:'./assets/sock.jpg'},
  {name:'An eraser', img:'./assets/eraser.jpeg'},
  {name:'A yarn ball', img:'./assets/yarn.jpg'},
  {name:'A MOUSE', img:'./assets/mouse.jpg'},
],correct:'A yarn ball'
},
{
order:3,question:'How many animals were shown ?', answers:[
  {name:'0', img:''},
  {name:'5', img:''},
  {name:'4', img:''},
  {name:'3', img:''},
  {name:'2', img:''}

],correct:'3'
},
{
order:4,question:'What color was the xbox controller?', answers:[
  {name:'Blue', img:''},
  {name:'Black', img:''},
  {name:'White', img:''},
  {name:'Purple', img:''},
  {name:'Red', img:''}

],correct:'Black'
},
{
order:5,question:'Which planet did you see ?', answers:[
  {name:'Saturn', img:'./assets/saturn.jpg'},
  {name:'Uranus', img:'./assets/uranus.jpg'},
  {name:'Jupiter', img:'./assets/jupiter.jpeg'},
  {name:'Mars', img:'./assets/mars.jpeg'},
  {name:'Venus', img:'./assets/venus.jpg'},
],correct:'A yarn ball'
},
{
  order:6,question:'What was the fourth country shown ?', answers:[
    {name:'Tunisia', img:'./assets/tunisia.png'},
    {name:'France', img:'./assets/france.jpg'},
    {name:'United State', img:'./assets/us.jpeg'},
    {name:'Canada', img:'./assets/canada.png'},
    {name:'Italie', img:'./assets/italie.jpg'},
    {name:'Soudan', img:'./assets/suden.png'},
    {name:'Syria', img:'./assets/syria.png'},
  ],correct:'Canada'
  },
  {
    order:7,question:'What was the sixth fruit shown?', answers:[
      {name:'Apple', img:'./assets/apple.jpg'},
      {name:'Banana', img:'./assets/banana.jpg'},
      {name:'Cherry', img:'./assets/cherry.jpg'},
      {name:'Pear', img:'./assets/pear.jpg'},
      {name:'Peach', img:'./assets/peach.jpg'},
      {name:'Strawberry', img:'./assets/strawberry.jpeg'},
      {name:'Raspberry', img:'./assets/Raspberry.jpg'},
    ],correct:'Strawberry'
    },
    {
      order:8,question:'What was the third vegetable shown?', answers:[
        {name:'Potato', img:'./assets/potato.PNG'},
        {name:'Pumpkin', img:'./assets/pumpkin.PNG'},
        {name:'Cucumber', img:'./assets/cucumber.PNG'},
        {name:'Carrot', img:'./assets/carrot.PNG'},
        {name:'Zucchini', img:'./assets/zucchini.PNG'},
        {name:'Tomato', img:'./assets/tomato.PNG'},
        {name:'Union', img:'./assets/union.PNG'},
      ],correct:'Carrot'
      },
      {
        order:9,question:'What was the last planet shown?', answers:[
          {name:'Dog', img:'./assets/Dog.jpg'},
          {name:'Pig ', img:'./assets/Pig.jpeg'},
          {name:'Lion', img:'./assets/Lion.jpg'},
          {name:'Sheep', img:'./assets/Sheep.jpg'},
          {name:'Monkey', img:'./assets/Monkey.jpeg'},
          {name:'Donkey', img:'./assets/Donkey.jpg'},
          {name:'Dolphin', img:'./assets/Dolphin.jpg'},
        ],correct:'Dolphin'
        },
        {
          order:10,question:'What was the last planet shown?', answers:[
            {name:'Mercury', img:'./assets/Mercury.jpg'},
            {name:'Venus ', img:'./assets/venus.jpg'},
            {name:'Earth', img:'./assets/Earth.jpg'},
            {name:'Mars', img:'./assets/mars.jpeg'},
            {name:'Jupiter', img:'./assets/jupiter.jpeg'},
            {name:'Saturn', img:'./assets/saturn.jpg'},
            {name:'Uranus', img:'./assets/uranus.jpg'},
          ],correct:'Uranus'
          },

];
tabAns=[];
ans='No answer';
time: number = 7;
timer: any;
display=true;
  constructor() {
   
   }

  ngOnInit(): void {
 if(localStorage.getItem("i")){
  this.i=parseInt(localStorage.getItem("i"));
 }
  }
  next(){
 if(this.i==14){

 }else{
  this.i=this.i+1;
    localStorage.setItem("i",this.i.toString());
    this.user.tabAns.push({number:this.i,choice:this.ans});
    this.ans='No answer';
    if(this.i>4){
      this.startTimer();
      this.display=false;
    }
    console.log(this.display);
 }
    
  
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.timer);
        this.display=true;
        this.time=7;
     
      }
    }, 1000);
  }


}
