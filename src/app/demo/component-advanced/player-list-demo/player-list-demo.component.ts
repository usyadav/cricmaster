
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-list-demo',
  templateUrl: './player-list-demo.component.html',
  styleUrls: ['./player-list-demo.component.css']
})
export class PlayerListDemoComponent implements OnInit {
  @Input() playerList: any;
  //@Input('players') playerList: any;
  selectedPlayer: any;
  @Output() onSelected :any = new EventEmitter();
   
  constructor() { }
  ngOnInit() {    
  }

  onRowClick(event: any, playerIndex: number, player: any) {
    this.selectedPlayer = player;
    console.log(this.selectedPlayer);
    this.onSelected.emit(this.selectedPlayer);
  }
}
