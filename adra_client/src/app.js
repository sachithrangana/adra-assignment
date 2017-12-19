import {AccountBalanceController} from 'api/AccountBalanceModule/AccountBalanceController';
import {Chart} from 'node_modules/chart.js/dist/Chart.js';

export class App {

  static inject() {
    return [AccountBalanceController];
  }

  constructor(api) {
    this.api = api;
    this.title = 'Aurelia, C# Integration Assignment ';
    this.accounts = [
      {"type": "R&D", "balance": "5.63"},
      {"type": "Canteen", "balance": "50000"},
      {"type": "CEO’s car", "balance": "10000"},
      {"type": "Parking fines", "balance": "2000"}];

    this.keyArray = [];
    this.valueArray = [];
  }
  attached() {
    this.generateBarChart();
  }
  detachKeyAndValueFromJsonArray = (jsonArray) => {
    jsonArray.forEach(function(json) {
      this.keyArray.push(json.type);
      this.valueArray.push(json.balance)
    });
  }
  generateBarChart = () => {

    // this.detachKeyAndValueFromJsonArray(this.accounts);
    this.api.fetchAccountBalance();
      const dataPoints = [21,14,28,35,7,64];
      console.log('datapoints', dataPoints);

      var ctx = document.getElementById("myChart");



    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [21,14,28,35,7,64],
        datasets: [{
          label: '$',
          data: [21,14,28,35,7,64],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true,
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
            }
          }]
        },
      }
    });
  }
}
