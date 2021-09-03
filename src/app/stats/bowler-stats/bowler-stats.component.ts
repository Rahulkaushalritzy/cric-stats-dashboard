import { Component, OnInit } from '@angular/core';

import {BowlerService} from './bowler.service';


@Component({
  selector: 'app-bowler-stats',
  templateUrl: './bowler-stats.component.html',
  styleUrls: ['./bowler-stats.component.css'],
  providers:  [BowlerService] 
})
export class BowlerStatsComponent implements OnInit {
  bowlerStat: any 
  constructor( private bowlerService:BowlerService) { }

  ngOnInit(): void {
 
    this.bowlerStat = this.bowlerService.getData();

    // console.log(this.bowlerStat);

  
  
  }
  }



