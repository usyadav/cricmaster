import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
  selectedDataType: any;
  players: any = [];
  myFood = 'lamb';
  constructor(private playerSerive: PlayerService) { }

  ngOnInit() {
  }

  handlePlayerData(result: any) {
    this.players = result;
  }

  handleError(error: any) {

  }

  getPlayers() {
    if (this.selectedDataType == "api") {
      this.players = this.playerSerive.getPlayersFromHttp().subscribe(
        data => { this.handlePlayerData(data) },
        err => { this.handleError(err); }
      );
    } else {
      this.players = this.playerSerive.getPlayers();
    }
  }
}
