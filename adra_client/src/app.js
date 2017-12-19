import {AccountBalanceController} from 'api/AccountBalanceModule/AccountBalanceController';
import {Chart} from 'node_modules/chart.js/dist/Chart.js';

export class App {

  static inject() {
    return [AccountBalanceController];
  }

  constructor(api) {
    this.api = api;
    this.title = 'Aurelia, C# Integration Assignment ';

  }
  attached() {
    this.generateBarChart();
  }

  generateBarChart = () => {
    this.api.fetchAccountBalance().then(accounts => {
        this.accounts = accounts;
        this.loadBarChart();
      }).catch(error => {

        // this data will get triggered for Internal server error situation from the server.
        this.accounts = [
          {
            "accountBalanceId": "SampleDataID",
            "rAndD": 5.63,
            "canteen": 50000,
            "ceoCar": 10000,
            "marketing": -600,
            "parkingFines": 200,
            "calculateddDate": "2017-01-01T00:00:00"
          }
        ];
        this.loadBarChart();
    });



  }

  loadBarChart(){
    var keys = Object.keys(this.accounts[0]);
    var values = Object.values(this.accounts[this.accounts.length-1]);
    var ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: keys.splice(1, keys.length - 2),
        datasets: [{
          label: '$',
          data: values.splice(1, values.length - 2),
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
