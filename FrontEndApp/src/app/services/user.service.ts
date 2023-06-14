import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url:any = environment.apiUrl;
  constructor(private httpclient: HttpClient) { }

  signup(data:any){
    return this.httpclient.post(this.url+ 
      "/user/signup", data,{
        headers: new HttpHeaders().set('content-type', "aplication/json")
      })

  }
}
