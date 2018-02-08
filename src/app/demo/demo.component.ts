import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  menuItems: any;
  selecetdMenuItem :any;
  constructor() { }

  ngOnInit() {
    this.menuItems = [{
      title: "Custom Modules",
      icon: "centercode",
      state: "custommodule"
    },{
      title: "Data Binding",
      icon: "flash",
      state: "databinding"
    },
    {
      title: "Using Directive and Pipes",
      icon: "file-code-o",
      state: "directives"
    },{
      title: "Create Component",
      icon: "eye",
      state: "component"
    },
    {
      title: "Angular Forms",
      icon: "handshake-o",
      state: "forms"
    },
    {
      title: "Routing and Services",
      icon: "suitcase",
      state: "routing"
    },
    {
      title: "Custom Directives and Pipes",
      icon: "certificate",
      state: "customdirective"
    } ,{
      title: "Others",
      icon: "group",
      state: "others"
    }      
    ];
  }

  onMenuSelect($event){
    
  }
}
