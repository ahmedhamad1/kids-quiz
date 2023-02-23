import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private us:AppService, private router:Router , private ac:ActivatedRoute) { }

  save:any;
  id:any;
  questions:any;

  tab=[ {
    order:1, question:'What was the man wearing ?' , answers:[{
      name:'Earmuffs' , img:'./assets/earmuffs.jpg' , 
    },{
      name:'Scarf',img:'./assets/scarf.jpeg'
    },{
      name:'Hat',img:'./assets/hat.jpg'
    },{
      name:'Airpods', img:'./assets/airpods.jpeg'
    },{
    name:'Earrings',img:'./assets/earrings.jpeg'
    }
   
    ],correct:'Airpods', title:''
  } ,
  {
  order:2,question:'What was the cat playing with ?', answers:[
    {name:'A tennis ball', img:'./assets/tennis.jpeg'},
    {name:'A sock ', img:'./assets/sock.jpg'},
    {name:'An eraser', img:'./assets/eraser.jpeg'},
    {name:'A yarn ball', img:'./assets/yarnb.jpg'},
    {name:'A MOUSE', img:'./assets/mouse.jpg'},
  ],correct:'A yarn ball', title:''
  },
  {
  order:3,question:'How many animals were shown ?', answers:[
    {name:'0', img:''},
    {name:'5', img:''},
    {name:'4', img:''},
    {name:'3', img:''},
    {name:'2', img:''}
  
  ],correct:'3', title:''
  },
  {
  order:4,question:'What color was the xbox controller?', answers:[
    {name:'Blue', img:''},
    {name:'Black', img:''},
    {name:'White', img:''},
    {name:'Purple', img:''},
    {name:'Red', img:''}
  
  ],correct:'Black', title:''
  },
  {
  order:5,question:'Which planet did you see ?', answers:[
    {name:'Saturn', img:'./assets/saturn.jpg'},
    {name:'Uranus', img:'./assets/uranus.jpg'},
    {name:'Jupiter', img:'./assets/jupiter.jpeg'},
    {name:'Mars', img:'./assets/mars.jpeg'},
    {name:'Venus', img:'./assets/venus.jpg'},
  ],correct:'Jupiter', title:'planets'
  },
  {
    order:6,question:'What was the fourth country shown ?', answers:[
      {name:'Tunisia', img:'./assets/tunisia.png'},
      {name:'France', img:'./assets/france.jpg'},
      {name:'United State', img:'./assets/us.jpeg'},
      {name:'Sudan', img:'./assets/suden.png'},
      {name:'Canada', img:'./assets/canada.png'},
      {name:'Italie', img:'./assets/italie.jpg'},
     
      {name:'Syria', img:'./assets/syria.png'},
    ],correct:'Sudan', title:'countries'
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
      ],correct:'Strawberry', title:'fruits'
      },
      {
        order:8,question:'What was the third vegetable shown?', answers:[
          {name:'Potato', img:'./assets/potato.PNG'},
          {name:'Pumpkin', img:'./assets/pumpkin.PNG'},
          {name:'Cucumber', img:'./assets/cucumber.PNG'},
          {name:'Carrot', img:'./assets/carrot.PNG'},
          {name:'Zucchini', img:'./assets/zucchini.PNG'},
          {name:'Tomato', img:'./assets/tomato.PNG'},
          {name:'Onion', img:'./assets/union.PNG'},
        ],correct:'Cucumber', title:'vegetables'
        },
        {
          order:9,question:'What was the last animal shown?', answers:[
            {name:'Dog', img:'./assets/Dog.jpg'},
            {name:'Pig ', img:'./assets/Pig.jpeg'},
            {name:'Lion', img:'./assets/Lion.jpg'},
            {name:'Sheep', img:'./assets/Sheep.jpg'},
            {name:'Monkey', img:'./assets/Monkey.jpeg'},
            {name:'Donkey', img:'./assets/Donkey.jpg'},
            {name:'Dolphin', img:'./assets/Dolphin.jpg'},
          ],correct:'Dolphin', title:'animals'
          },
          {
            order:10,question:'What was the last planet shown?', answers:[
              {name:'Mercury', img:'./assets/Mercury.jpg'},
              {name:'Venus ', img:'./assets/venus.jpg'},
              {name:'Earth', img:'./assets/Earth.jpg'},
              
             
              {name:'Saturn', img:'./assets/saturn.jpg'},
              {name:'Uranus', img:'./assets/uranus.jpg'},
              {name:'Jupiter', img:'./assets/jupiter.jpeg'},
              {name:'Mars', img:'./assets/mars.jpeg'},
            ],correct:'Mars', title:'planets'
            },
          
              {
                order:11,question:'What was the fourth number shown?', answers:[
                  {name:'45', img:'./assets/45.jpg'},
                  {name:'99 ', img:'./assets/99.jpg'},
                  {name:'12', img:'./assets/12.jpg'},
                  {name:'1', img:'./assets/1.png'},
                  {name:'20', img:'./assets/20.jpg'},
                  {name:'3', img:'./assets/3.png'},
                  {name:'66', img:'./assets/66.jpg'},
                  {name:'17', img:'./assets/17.png'},
                  {name:'11', img:'./assets/11.png'},
                  {name:'50', img:'./assets/50.jpg'},
                ],correct:'1', title:'numbers'
                },
                {
                  order:12,question:'What was the nineth logo shown?', answers:[
                    {name:'Ford', img:'./assets/Ford.jpg'},
                    {name:'Fiat ', img:'./assets/Fiat.png'},
                    {name:'Volkswagen', img:'./assets/Volkswagen.jpeg'},
                    {name:'Peugeot', img:'./assets/Peugeot.png'},
                    {name:'Renault', img:'./assets/Renault.jpeg'},
                    {name:'Ferari', img:'./assets/Ferari.png'},
                    {name:'Porshe', img:'./assets/Porshe.jpeg'},
                    {name:'Toyota', img:'./assets/Toyota.png'},
                    {name:'KIA', img:'./assets/KIA.png'},
                    {name:'Mercedes Benz', img:'./assets/Mercedes.png'},
                  ],correct:'KIA', title:'logos'
                  },
                  {
                    order:13,question:'What was the sixth name shown?', answers:[
                      {name:'Mohamed', img:'./assets/mohamed.png'},
                      {name:'Ahmed ', img:'./assets/ahmed.png'},
                      {name:'Omar', img:'./assets/Omar.png'},
                      {name:'Adam', img:'./assets/Adam.png'},
                      {name:'Osman', img:'./assets/Osman.png'},
                      {name:'Fatima', img:'./assets/Fatima.png'},
                      {name:'Aysha', img:'./assets/Aysha.png'},
                      {name:'Malek', img:'./assets/Malek.png'},
                      {name:'Sabri', img:'./assets/Sabri.png'},
                      {name:'Abu bakr', img:'./assets/Abukaker.png'},
                    ],correct:'Fatima', title:'names'
                    },
                    {
                      order:14,question:'What was the second food shown?', answers:[
                        {name:'Hamburger', img:'./assets/hamburger.jpeg'},
                        {name:'Pasta', img:'./assets/pasta.jpeg'},
                        {name:'Rice', img:'./assets/riz.jpeg'},
                        {name:'Fish', img:'./assets/fish.jpeg'},
                        {name:'Tacos', img:'./assets/tacos.jpeg'},
                        {name:'Cheese', img:'./assets/fromage.jpg'},
                        {name:'Salad', img:'./assets/salade.jpeg'},
                        {name:'Pop corn', img:'./assets/pop.jpg'},
                        {name:'couscous', img:'./assets/couscous.jpeg'},
                        {name:'brik', img:'./assets/brik.jpg'},
                      ],correct:'Pasta', title:'foods'
                      },
                      {
                        order:15,question:'What was the third word shown?', answers:[
                          {name:'Install', img:'./assets/10-Words.png'},
                          {name:'Learn ', img:''},
                          {name:'Itemize', img:''},
                          {name:'Collaborate', img:''},
                          {name:'Brighten', img:''},
                          {name:'Gain', img:''},
                          {name:'Edge', img:''},
                          {name:'Observe', img:''},
                          {name:'Rob', img:''},
                          {name:'Tug', img:''},
                        ],correct:'Itemize', title:'words'
                        },
  
  ];

  ngOnInit(): void {
    this.ac.paramMap.subscribe(result=>{ this.id=result.get('id');
    console.log(this.id);
    this.getSave(this.id);

  })
  }
  getTab(order){
    let obj = this.tab.find(o => o.order ===order);
    return obj
  }

  getSave(id){
    this.us.getSave(id).subscribe(res=>{
      this.save=res;
      
      this.questions=res.questions
      for(let qst in this.questions ){
        console.log(this.questions[qst])
      }

      
    })
  }
 

  return(){
    this.router.navigate(['/'])
  }

}
