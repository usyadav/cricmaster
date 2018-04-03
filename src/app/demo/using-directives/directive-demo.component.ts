import { Component, OnInit } from '@angular/core';
import { ConvertToSpacesPipe } from './../../shared/convert-to-spaces.pipe';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  convertFilter="";
  stringPipeFromComponent = "AB*CD";
  convertedString ="";
  playersList = [
    { name: 'Sachin Ramesh Tendulkar', nickname: 'Master', email: 'isachin@gmail.com', team: 'IN' },
    { name: 'A B Devilliars', nickname: 'ABD', email: 'adb@gmail.com', team: 'SA' },
    { name: 'Inzemam ul Haq', nickname: 'Aloo', email: 'inzm@gmail.com', team: 'PK' }
  ];

  constructor(private _converToSpaces: ConvertToSpacesPipe) { }

  ngOnInit() {
  
  }

  convert(){
    this.convertedString = this._converToSpaces.transform(this.stringPipeFromComponent, this.convertFilter);
  }


}
