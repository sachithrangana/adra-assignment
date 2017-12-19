import {formatUrl} from '../ApiRequestHelper';
import api from '../apiServices'

import {HttpClient, json} from 'aurelia-fetch-client';
let httpClient = new HttpClient();
export class AccountBalanceController {
  fetchAccountBalance = () => {
    const url = formatUrl(api.AccountBalanceApi.baseUrl, api.AccountBalanceApi.routes.get_account_balance, {});
    return httpClient.fetch(url)
      .then(data => {
        console.log(data);
        return data;
      }).catch(error => {
        console.log(error);
    });
  };
}

