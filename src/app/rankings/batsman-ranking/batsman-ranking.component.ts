import { Component, OnInit } from '@angular/core';
import { RankingService } from '../rankings.service';

@Component({
  selector: 'app-batsman-ranking',
  templateUrl: './batsman-ranking.component.html',
  styleUrls: ['./batsman-ranking.component.css']
})
export class BatsmanRankingComponent implements OnInit {

  constructor( private rankingService : RankingService) { }



testTeam:boolean=false
oditeam:boolean=false
t20team:boolean=false

testteamdata :any
odibatsmandata :any
t20teamdata:any

  ngOnInit(): void {





  }

  toOdi(){
   
    this.odibatsmandata = this.rankingService.odibatsman();
    console.log(this.odibatsmandata);
    this.oditeam =true
  
  }

}
