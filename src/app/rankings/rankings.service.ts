
import { Injectable } from '@angular/core';
import Testteamrankings from 'src/app/MockData/Testteamrankings.json'
import oditeamrankings from 'src/app/MockData/oditeamrankings.json'
import t20teamrankings from 'src/app/MockData/t20teamrankings.json'
import { HttpClient } from '@angular/common/http';
import batsmanodi from 'src/app/MockData/batsmanodi.json'

@Injectable({
  providedIn: 'root',
})


export class RankingService {
  constructor(private http: HttpClient) { }

  testteam() {
    let testteam = Testteamrankings
    return testteam;
  }
  oditeam() {
    let oditeam = oditeamrankings
    return oditeam;
  }
  t20team() {
    let t20team = t20teamrankings
    return t20team;
  }

  odibatsman(){
    let odibat = batsmanodi
    return odibat
  }



}
