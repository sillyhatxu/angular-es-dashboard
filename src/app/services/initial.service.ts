import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor(private http: HttpClient) { }

  initialData() {
    var url = environment.apiUrl + "/initial"
    console.log(url)
    this.http.get(url).subscribe(function (data: { data: any }) {
      environment.serverHost = data.data.server_host
      environment.esScheme = data.data.scheme
      environment.esUrl = data.data.url
      console.log(environment.serverHost)
      console.log(environment.esScheme)
      console.log(environment.esUrl)
    }, function (err) {
      console.error(err);
    })

  }
}

