import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BatsmanService } from '../batsman-stats/batsman.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-batsman-details',
  templateUrl: './batsman-details.component.html',
  styleUrls: ['./batsman-details.component.css']
})
export class BatsmanDetailsComponent implements OnInit {


  chartOptions: {} = {};
  chartOptionsa: {} = {};
  Highcharts = Highcharts;
  value: any
  




  constructor(private route: ActivatedRoute,
    private batsmanService: BatsmanService,
    private _router: Router,

  ) { }

  stats: any
  bstats: any
  id: number | undefined;

  myJson: any

  data: any [] = []


    

  ngOnInit() {


    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.stats = this.batsmanService.getDetails(this.id)
        this.bstats = this.batsmanService.getbatDetails(this.id)
        console.log(this.bstats);

      });




      



    this.chartOptions = {
      chart: {
        type: 'column'
      },

      title: {
        text:  'Runs Years Wise'
      },

      subtitle: {
        text: this.bstats.name
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },

      xAxis: {
        categories: [this.bstats.a2, this.bstats.b2, this.bstats.c2, this.bstats.d2],
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Runs'
        }
      },


      series: [{
         name: 'Runs',
          data: [this.bstats.a, this.bstats.b, this.bstats.c, this.bstats.d],

    
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }



    this.chartOptionsa = { 
      
      chart:{
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },

  // colors  : ['#ffff00'],
  title: {
      text: 'Runs against Top Countries Distribution'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              
          }
      }
  },
  

  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Australia',
          y: this.bstats.Australia,
          color: 'yellow'
          
      }, {
          name: 'Bangladesh',
          y: this.bstats.Bangladesh,
          color : 'green'
      }, {
          name: 'England',
          y: this.bstats.England
      }, {
          name: 'New Zealand',
          y: this.bstats.NewZealand
      }, {
          name: 'Pakistan',
          y: this.bstats.Pakistan
      }, {
          name: 'South Africa',
          y: this.bstats.SouthAfrica
      }, {
          name: 'Srilanka',
          y: this.bstats.Srilanka
      }, {
          name: 'West Indies',
          y: this.bstats.WestIndies
      },
       {
        name: 'India',
        y: this.bstats.India
    },
    ]
  }]
}
     }



  



  onBack(): void {
    this._router.navigate(['stats']);
  }

}