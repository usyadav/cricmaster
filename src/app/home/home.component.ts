import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {

  }

  goToTeams(){
    this._router.navigateByUrl('/team');
    
  }

  goToDirectiveDemos(){
    this._router.navigate(['demos/customdirective'])
  }
}
