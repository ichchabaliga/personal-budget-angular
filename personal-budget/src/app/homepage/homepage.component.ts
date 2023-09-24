import { HttpClient } from '@angular/common/http';
import { Component,AfterViewInit} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {  
 public  dataSource:any = {
    datasets: [{
        data: [],
        backgroundColor: [
            'rgb(132, 227, 200)',
            'rgb(168, 230, 207)',
            'rgb(220, 237, 193)',
            'rgb(255, 211, 182)',
            'rgb(255, 170, 165)',
            'rgb(255, 139, 148)',
            'rgb(255, 116, 128)'
        ]
    }],
    labels: [ ]
};

  constructor(private http:HttpClient) { 
    // const el= document.getElementById('myChart');

  }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res);
      for (var i = 0; i < res.myBudget.length; i++) {
    
      this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
      this.dataSource.labels[i] = res.myBudget[i].title;

     
    }
    this.createChart();
  })

}

createChart() {
  // var ctx = document.getElementById('myChart').getContext('2d');
  var ctx = document.getElementById("myChart");
  var myPieChart = new Chart(ctx as any, {
        type: 'pie',
        data: this.dataSource
    });
}}
