import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { StatsComponent } from './stats/stats.component';
import { BatsmanStatsComponent } from './stats/batsman-stats/batsman-stats.component';
import { BowlerStatsComponent } from './stats/bowler-stats/bowler-stats.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BatsmanDetailsComponent } from './stats/batsman-details/batsman-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BowlerDetailsComponent } from './stats/bowler-details/bowler-details.component';
import { TeamComponent } from './rankings/team/team.component';
import { TeamRankingComponent } from './rankings/team-ranking/team-ranking.component';
import { BatsmanRankingComponent } from './rankings/batsman-ranking/batsman-ranking.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HomeComponent } from './home/home.component';


const appRoutes : Routes=[
  
   {path: '', component : HomeComponent},
  { path: 'rankings', component : RankingsComponent},
  { path: 'stats', component : StatsComponent},
  { path: 'batsmanstats', component: BatsmanStatsComponent},
  { path: 'batsmandetails/:id', component: BatsmanDetailsComponent},    
  { path: 'bowlerstats', component: BowlerStatsComponent},
  { path: 'bowlerdetails/:id', component: BowlerDetailsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'teamranking', component: TeamRankingComponent},
  { path: 'batsmanranking', component: BatsmanRankingComponent}
          
  
    
    
  
 
];

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    StatsComponent,
    BatsmanStatsComponent,
    BowlerStatsComponent,
    HeaderComponent,
    BatsmanDetailsComponent,
    BowlerDetailsComponent,
    TeamComponent,
    TeamRankingComponent,
    BatsmanRankingComponent,
    HomeComponent,

   
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HighchartsChartModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
