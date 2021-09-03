
import bowlerStat from  'src/app/MockData/bowlerStat.json'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import bowlerDetails from  'src/app/MockData/bowlerdetails.json'
 
@Injectable({
    providedIn: 'root',
  })


export class BowlerService{
  constructor(private http: HttpClient) { }

    getData(){
        let bStat = bowlerStat
        return bStat;
        }

       

        getDetails(id : number){
          let stats = bowlerStat
          return stats[id];
          
        }

        getbowlerData(){
          let bowlerStat = bowlerDetails
          return bowlerStat
        }

        getbowlerDetails (id:number){
          let bowlerDet = bowlerDetails
          return bowlerDet[id] 
        }
       

}
