import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-info-demo',
  templateUrl: './player-info-demo.component.html',
  styleUrls: ['./player-info-demo.component.css']
})
export class PlayerInfoDemoComponent implements OnInit {

  @Input('playerIn') player: any;
  @Output('newPlayer') newPlayer = new EventEmitter();

  isTeamSelected: boolean;
  teams = [{ name: "India", value: "IN" }, { name: "Australia", value: "AU" }, { name: "Pakistan", value: "PAK" },
  { name: "SriLanka", value: "SL" }];

  constructor() { }

  setTeam(team: string) {
    let teamValue = this.teams.find(x => x.name == team);
    this.player.team = teamValue.value;
  }
  ngOnInit() {
    if (!this.player) {
      this.reset();
    } else {
      this.setTeam(this.player.team);
    }
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

  addItem(player) {
    let playerCopy = Object.assign({}, this.player);
    this.newPlayer.emit(playerCopy);
  }
  reset() {
    this.player = {};
    this.player.team = "default";
  }
}
