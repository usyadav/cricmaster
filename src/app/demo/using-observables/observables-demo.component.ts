import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

   players:any= [
    {
      "id": 1,
      "name": "Sachin Ramesh Tendulkar",
      "nickname": "Master",
      "email": "isachin@gmail.com",
      "team": "India"
    },
    {
      "id": 2,
      "name": "Viraat Kohli",
      "nickname": "Kohli",
      "email": "kohli@gmail.com",
      "team": "India"
    },
    {
      "id": 3,
      "name": "Harbhajan",
      "nickname": "Bhajji",
      "email": "bhajji@gmail.com",
      "team": "India"
    },
    {
      "id": 4,
      "name": "Bhuvneshwar Kumar",
      "nickname": "Bhuvi",
      "email": "bhuvi@gmail.com",
      "team": "India"
    },
    {
      "id": 5,
      "name": "Inzemam ul Haq",
      "nickname": "Aloo",
      "email": "inzm@gmail.com",
      "team": "Pakistan"
    }
  ]

  filteredPlayer:any;

  message: string;

  getNativeElement(element) {
    return element.nativeElement;
  }
  @ViewChild("playersearch") playersearch: any;
  constructor() { }

  ngOnInit() {
    this.players;
    const search$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')
      .subscribe(event => console.log('Event :' + event))

      /*const searchq$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')
      .map((event: any) => event.target.value) // no need to pass complete event to chaining fn
      .subscribe(query => console.log('Query :' + query))
    
      //filter
    const searchq$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')
      .filter((event:any)=> event.shiftKey) // any doesn't have shify key will be droped
      .map((event: any) => event.target.value) // no need to pass complete event to chaining fn
      .subscribe(query => this.message = query);
    
    //muli map
    const searchui$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')     
      .map((event: any) => event.target.value) // no need to pass complete event to chaining fn
      .map(query => query.toUpperCase())
      .subscribe(query => this.message = query);
    //debounce
      const searchdbi$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')     
      .debounceTime(2000)
      .map((event: any) => event.target.value)      
      .subscribe(query => this.message = query); 
      //distinct until change
      const searchdbi$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')     
      .distinctUntilChanged()
      .map((event: any) => event.target.value)      
      .subscribe(query => this.message = query);

      const searchdbi$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')     
      .distinctUntilChanged()
      .map((event: any) => event.target.value)      
      .subscribe(query => this.message = query);*/

      const searchdbi$ = Observable.fromEvent(this.getNativeElement(this.playersearch), 'keyup')     
      .debounceTime(2000)
      .distinctUntilChanged()
      .map((event: any) => event.target.value)  
      .switchMap((query:any) => this.search(query))
      .subscribe(player => this.filteredPlayer = player);
  }

  search(input){
    let result = this.players.filter((player)=>player.nickname.toLowerCase() == input.toLowerCase())
    return result;
  }
}
