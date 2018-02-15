import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {
  players: any;
  playerjson: string = "assets/data/players.json";
  constructor(private http: HttpClient) {
  }

  getPlayers() {
    let tempPlayers = [
      { id: 1, name: 'Sachin Ramesh Tendulkar', nickname: 'Master', email: 'isachin@gmail.com', team: 'India' },
      { id: 2, name: 'Viraat Kohli', nickname: 'Kohli', email: 'kohli@gmail.com', team: 'India' },     
      { id: 4, name: 'Bhuvneshwar Kumar', nickname: 'Bhuvi', email: 'bhuvi@gmail.com', team: 'India' },
      { id: 5, name: 'Inzemam ul Haq', nickname: 'Aloo', email: 'inzm@gmail.com', team: 'Pakistaan' }
    ];
    this.players = tempPlayers;
    return this.players;
  }

 
  getPlayersFromHttp() {
    return this.http.get(this.playerjson);
  }

  addPlayer(newplayer: any) {
    let topID = this.players.length + 1;
    newplayer.id = topID;
    this.players.push(newplayer);
  }

  deletePlayer(player: any) {
    let indx = this.players.indexOf(player);
    if (indx != -1) {
      this.players.splice(indx, 1);
    }
  }
}
