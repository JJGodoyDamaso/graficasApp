import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#EA82F5', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#8F1329', hoverBackgroundColor: 'red' },
      { data: [ 12, 31, 32, 42, 77, 13, 23 ], label: 'Series C', backgroundColor: '#EDF6C0', hoverBackgroundColor: 'red' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    for(let i = 0; i < this.barChartData.datasets.length; i++) {
      this.barChartData.datasets[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100) 
      ];
    }
    this.chart?.update();
  }

}
