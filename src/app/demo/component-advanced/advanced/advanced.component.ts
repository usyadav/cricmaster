import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../using-services/player.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  selectedPlayer :any;
  playerList: any;

  constructor(private playerService: PlayerService) { }

  handlePlayerData(result: any) {
    this.playerList = result;
  }

  handleError(error: any) {
  }

  ngOnInit() {
    this.playerList = this.playerService.getPlayersFromHttp().subscribe(
      data => { this.handlePlayerData(data) },
      err => { this.handleError(err); }
    );
  }

  playerSelected(emittedPlayer:any){
    this.selectedPlayer = emittedPlayer;
  }

  onPlayerAdd(newPlayer:any){
    this.playerList.push(newPlayer);
  }
}
