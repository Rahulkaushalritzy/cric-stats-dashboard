
import batsmanStat from  'src/app/MockData/batsmanStat.json';
import batsmandetails from 'src/app/MockData/batsmandetails.json';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class BatsmanService{


 


  //FOR STAT COMPONENT
getbatdata(){
  let Bstat = batsmandetails
  return Bstat
}

//FOR STAT COMPONENT
    getData(){
      let Stat = batsmanStat
      return Stat;
      }
    
        //FOR DETAILS COMPONENT
      getDetails(id : number){
        let stats = batsmanStat
        return stats[id];
        
      }

      //FOR DETAILS COMPONENT
      getbatDetails(id : number){
          let bstats = batsmandetails
          return bstats[id]
      }


}

