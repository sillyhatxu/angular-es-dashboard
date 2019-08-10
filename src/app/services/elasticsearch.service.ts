import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { version } from 'punycode';

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
  version() {
    console.log("version")
    var url = environment.apiUrl + "/elasticsearch/version/" + environment.esScheme + "/" + environment.esUrl
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
    }, function (err) {
      console.error(err);
    })
    console.log("version end")
  }

  health() {
    var url = environment.apiUrl + "/elasticsearch/health/" + environment.esScheme + "/" + environment.esUrl
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
    }, function (err) {
      console.error(err);
    })
  }

  clusterStats() {
    var url = environment.apiUrl + "/elasticsearch/cluster-stats/" + environment.esScheme + "/" + environment.esUrl
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
    }, function (err) {
      console.error(err);
    })
  }

  indices() {
    var url = environment.apiUrl + "/elasticsearch/indices/" + environment.esScheme + "/" + environment.esUrl
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
    }, function (err) {
      console.error(err);
    })
  }
}
