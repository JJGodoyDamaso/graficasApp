import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [],
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales().subscribe( data => {
    //   this.doughnutChartLabels = Object.keys(data);
    //   this.doughnutChartData = {
    //     labels:Object.keys(data),
    //     datasets:[
    //         {
    //           data:Object.values(data)
    //         }
    //     ]
    //   }
    // })

      this.graficasService.getUsuariosRRSS().subscribe( data => {
        this.doughnutChartLabels = data.labels
          this.doughnutChartData = {
            labels:data.labels,
            datasets:[
                {
                  data: data.values
                }
            ]
          }
      })

  }

}
