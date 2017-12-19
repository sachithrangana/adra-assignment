import {formatUrl} from '../ApiRequestHelper';
import api from '../apiServices'

import {HttpClient, json} from 'aurelia-fetch-client';
let httpClient = new HttpClient();
export class AccountBalanceController {
  fetchAccountBalance = () => {
    const url = formatUrl(api.AccountBalanceApi.baseUrl, api.AccountBalanceApi.routes.get_account_balance, {});
    httpClient.fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      }).catch(error => {
      console.log(error);
    });
  };
}

