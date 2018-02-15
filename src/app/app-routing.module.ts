
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerModule } from './player/player.module';
import { SharedModule } from './shared/shared.module';


import { TournmentModule } from './tournment/tournment.module';
import { TeamModule } from './team/team.module';

import { CricketMasterComponent } from './cricket-master.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { DemoComponent } from './demo/demo.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournment/tournament.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'team', component: TeamComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'player', component: PlayerComponent }
  ,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [PlayerModule,SharedModule, TeamModule, TournmentModule,
     RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

