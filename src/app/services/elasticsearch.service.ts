import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { EsVersion } from '../dto/EsVersion';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<any[]> {
  //   const url='';
  //   const active = 'status/active';
  //   const header = { headers: this.createAuthorizationHeader() };
  //   return this.http.get(url + active, header)
  //     .map(
  //       res => {
  //         return res.json();
  //       });
  // }

  // const headers = new HttpHeaders()
  //             .set("X-CustomHeader", "custom header value");

  // getCharacters() { 
  //    return this 
  //           .http
  //           .get(`${this.url}/characters`, {headers}); }

  version(): Observable<EsVersion> {
    const url = `${environment.apiUrl}/elasticsearch/version/${environment.esScheme}/${environment.esUrl}`;
    return this.http.get<EsVersion>(url)
  }

  health(): any {
    const url = `${environment.apiUrl}/elasticsearch/health/${environment.esScheme}/${environment.esUrl}`;
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
      return data
    }, function (err) {
      console.error(err);
    })
  }

  clusterStats(): any {
    const url = `${environment.apiUrl}/elasticsearch/cluster-stats/${environment.esScheme}/${environment.esUrl}`;
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
      return data
    }, function (err) {
      console.error(err);
    })
  }

  indices(): any {
    const url = `${environment.apiUrl}/elasticsearch/indices/${environment.esScheme}/${environment.esUrl}`;
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
      return data
    }, function (err) {
      console.error(err);
    })
  }
}
