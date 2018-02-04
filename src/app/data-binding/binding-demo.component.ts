import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {

  txtInterpolation:string="{{someModelValue }}";
  txtProperty:string ="[property/attribute]='value from component'>";
  txtEvent:string="<element (event)='component Function'/>";
  txtTwoWay:string="[(NgModel)]='some property to hold Value'";
  interpolationValue : string="This text is from Interpolation";  
  
  propertyBindingClass="highlight";
  clickResult:any="";
  clickCounter:number=0;
  propertyForTwoWay:string="";

  constructor() { }

  ngOnInit() {
  }

  onclick(event:any){
    this.clickCounter ++;
    this.clickResult = " Clicked :"+ this.clickCounter+"-times";
  }

}
