import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RankingService } from '../rankings.service';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.css']
})
export class TeamRankingComponent implements OnInit {
testTeam:boolean=false
oditeam:boolean=false
t20team:boolean=false

testteamdata :any
oditeamdata :any
t20teamdata:any

  constructor(private _router:Router,
    private rankingService : RankingService,
    ) { }
 
  ngOnInit(): void {

   
  }

  toTest(){
    this.testteamdata = this.rankingService.testteam();
    console.log(this.testteamdata);
    
  
this.testTeam=true;
this.oditeam = false;
this.t20team=false;

  }

  toOdi(){
   
    this.oditeamdata = this.rankingService.oditeam();
    console.log(this.oditeamdata);
    
  
  this.oditeam=true;
  this.t20team=false;
  this.testTeam=false;
  }

  tot20(){
    this.testTeam =false;
    this.oditeam =false;
    this.t20teamdata =this.rankingService.t20team();
    console.log(this.t20teamdata);
    
    this.t20team = true;
  

  }




}
