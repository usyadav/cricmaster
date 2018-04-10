import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],  
})
export class DemoComponent implements OnInit {

  menuItems: any;
  selecetdMenuItem :any;
  constructor() { }

  ngOnInit() {
    this.menuItems = [{
      title: "Custom Modules",
      icon: "fab fa-modx",
      state: "custommodule"
    },{
      title: "Data Binding",
      icon: "fas fa-exchange-alt",
      state: "databinding"
    },
    {
      title: "Using Directive and Pipes",
      icon: "fas fa-plug",
      state: "directives"
    },{
      title: "Create Component",
      icon: "fas fa-asterisk",
      state: "component"
    },
    {
      title: "Angular Forms",
      icon: "fas fa-stethoscope",
      state: "forms"
    },
    {
      title: "Services",
      icon: "fas fa-arrows-alt",
      state: "service"
    },
    {
      title: "Component Advanced",
      icon: "fas fa-code",
      state: "componentadvanced"
    },
    {
      title: "Routing",
      icon: "fas fa-anchor",
      state: "routing"
    },
    {
      title: "Custom Directives and Pipes",
      icon: "far fa-eye-slash",
      state: "customdirective"
    } ,{
      title: "Observables",
      icon: "fas fa-utensils",
      state: "observables"
    }      
    ];
  }

  onMenuSelect($event){
    
  }
}
