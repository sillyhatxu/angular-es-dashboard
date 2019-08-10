import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ConfigDTO } from '../dto/ConfigDTO';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor(private http: HttpClient) { }

  initialData(): Observable<ConfigDTO> {
    var url = environment.apiUrl + "/initial"
    return this.http.get<ConfigDTO>(url)
  }
}

