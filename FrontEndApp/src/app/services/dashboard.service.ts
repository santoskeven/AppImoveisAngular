import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  url = environment.apiUrl

  getDetails(){
    return this.httpClient.get(this.url + 'dashboard/details')
  }

}
