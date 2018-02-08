import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  
  playersList=[
    {name:'Sachin Ramesh Tendulkar',nickname:'Master',email:'isachin@gmail.com',team:'IN'},
    {name:'A B Devilliars',nickname:'ABD',email:'adb@gmail.com',team:'SA'},
    {name:'Inzemam ul Haq',nickname:'Aloo',email:'inzm@gmail.com',team:'PK'}
  ];  

  constructor() { }

  ngOnInit() {
  }

}
