export class batsman_stat{
public id : number;
public name : string;
public matches : number;
public imagePath: string;
public best : number;
public average : number;
public strikerate : number;
public fifties : number;
public centuries: number;
// public wickets : number;


constructor( id : number , name :string, matches: number, imagePath:string,  best : number,  average : number,  strikerate : number,  fifties:number,  centuries: number,
     ){
    this.id = id;
    this.name = name;
    this.matches=matches;
    this.imagePath = imagePath;
    this.best = best;
    this.average=average;
    this.strikerate=strikerate;
    this.fifties=fifties;
    this.centuries = centuries;
    // this.wickets = wickets;


}
}

export class bowler_stat{
    public id : number;
    public name : string;
    public matches : number;
    public imagePath: string;
    public best : string;
    public average : number;
    public wickets : number;
    public fifers : number;
    
    
    constructor( id : number , name :string, matches: number, imagePath:string,  best : string,  average : number, fifers: number, wickets: number)
    {

        this.id = id;
        this.name = name;
        this.matches=matches;
        this.imagePath = imagePath;
        this.best = best;
        this.average=average;
        this.wickets = wickets;
        this.fifers=fifers
    
    
    }
    }
    
    