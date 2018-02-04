import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { IPlayer } from './../model/player';

@Component({
  selector: 'app-manage-player',
  templateUrl: './manage-player.component.html',
  styleUrls: ['./manage-player.component.css']
})
export class ManagePlayerComponent implements OnInit {

  @ViewChild('team') team: ElementRef;
  isTeamSelected:boolean;

  teams =[{name:"India",value:"IN"},
  {name:"Australia",value:"AU"},
  {name:"Pakistan",value:"PAK"},
  {name:"SriLanka",value:"SL"}];

  player : IPlayer;
  constructor() {
    this.setPlayerDefault();
   }

  setPlayerDefault(){
    this.player={
     team:"",
     name:"",
     nickname:"",
     dob:"",
     id:0,
     email:""
    }
  }

  ngOnInit() {
    
  }   
  
  
  validateTeamSelected() {
    if (this.player.team === "default") {
      this.isTeamSelected = false;
    } else {
      this.isTeamSelected = true;
    }
    return this.isTeamSelected;
  }

  onTeamChange() {     
    if (this.validateTeamSelected()) {              
    }
    else {       
    }
  }

}
