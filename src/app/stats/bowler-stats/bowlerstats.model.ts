export class bowler_stat{
    public name : string;
    public matches : number;
    public imagePath: string;
    public best : number;
    public average : number;
  public fivewickets : number;
  
    
    constructor(name :string, match: number, imagePath:string, public bst : number, public avg : number, public fifer : number ){
        this.name = name;
        this.matches=match;
        this.imagePath = imagePath;
        this.best = bst;
        this.average=avg;
        this.fivewickets=fifer;
    
    
    
    }
    }