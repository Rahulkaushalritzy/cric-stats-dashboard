import { Component, OnInit } from '@angular/core';
import { BatsmanService } from './batsman.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-batsman-stats',
  templateUrl: './batsman-stats.component.html',
  styleUrls: ['./batsman-stats.component.css'],
  providers: [BatsmanService]
})
export class BatsmanStatsComponent implements OnInit {
  
batsmanStat : any;
batsmanStats : any;

  constructor(private batsmanService: BatsmanService,
    private router: Router) { }



  ngOnInit(): void {
 


    this.batsmanStat = this.batsmanService.getData();

     this.batsmanStats = this.batsmanService.getbatdata();
    

    // console.log(this.batsmanStats);

      
    
    

  }

}
