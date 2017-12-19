import {fetchAccountBalance} from 'api/AccountBalanceModule/index';
export class App {
  constructor() {
    this.header = 'Aurelia C# Integration Assignment ';
    this.accounts = [
      {"type": "R&D", "balance": "5.63"},
      {"type": "Canteen", "balance": "50000"},
      {"type": "CEO’s car", "balance": "10000"},
      {"type": "Parking fines", "balance": "2000"}];

    fetchAccountBalance();
  }
}
