import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  rootUrl = "http://localhost:5000"
  version = "/api/v1"

  constructor(private http: HttpClient) { }

  get(url: string, cb: any){
    const endpoint = `${this.rootUrl}${this.version}/${url}`;
    this.http.get<any>(endpoint).subscribe(response => {
      if(response.success){
        cb(response);
      }else {
        console.log("error");
      }
    })
  }

  search(url: string, query: any, cb: any){
    const params = new HttpParams({
      fromObject: query
    })
    const endpoint = `${this.rootUrl}${this.version}/${url}`;
    this.http.get<any>(endpoint, { params }).subscribe(response => {
      if(response.success){
        cb(response);
      }else {
        console.log("error");
      }
    })
  }

  post(url: string, body: any, cb: any){
    const endpoint = `${this.rootUrl}${this.version}/${url}`;
    this.http.post<any>(endpoint, body).subscribe(response => {
      if(response.success){
        cb(response)
      }else {
        console.log("post error");
      }
    });
  }

  patch(url: string, body: any, cb: any){
    const endpoint = `${this.rootUrl}${this.version}/${url}`;
    this.http.patch<any>(endpoint, body).subscribe(response => {
      if(response.success){
        cb(response)
      }else {
        console.log("Patch error");
      }
    });
  }
  

}
