import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-using-forms',
  templateUrl: './using-forms.component.html',
  styleUrls: ['./using-forms.component.css']
})
export class UsingFormsComponent implements OnInit {

  @ViewChild('team') team: ElementRef;
  isTeamSelected: boolean;

  teams = [{ name: "India", value: "IN" },
  { name: "Australia", value: "AU" },
  { name: "Pakistan", value: "PAK" },
  { name: "SriLanka", value: "SL" }];

  player: any;
  constructor() {
    this.setPlayerDefault();
  }

  setPlayerDefault() {
    this.player = {
      team: "",
      name: "",
      nickname: "",
      dob: "",
      id: 0,
      email: ""
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

  addItem(player:any){

  }
}
