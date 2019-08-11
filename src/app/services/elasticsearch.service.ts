import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EsVersion } from '../dto/EsVersion';
import { EsHealth } from '../dto/EsHealth';
import { ResponseDTO } from '../dto/ResponseDTO';
import { EsPing } from '../dto/EsPing';
import { MappingsDTO } from '../dto/EsMappings';

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


  connect(esurl: string): Observable<ResponseDTO<EsPing>> {
    // const url = `${environment.apiUrl}/elasticsearch/version/${environment.esScheme}/${environment.esUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }
    const url = `${environment.apiUrl}/elasticsearch/connect`;
    return this.http.post<any>(url, {
      "es_url": esurl
    }, httpOptions).pipe(catchError(this.handleError<EsPing[]>('connect', [])))
  }

  version(): Observable<ResponseDTO<string>> {
    const url = `${environment.apiUrl}/elasticsearch/version`;
    return this.http.get<ResponseDTO<string>>(url)
  }


  health(): Observable<ResponseDTO<Array<EsHealth>>> {
    const url = `${environment.apiUrl}/elasticsearch/health`;
    return this.http.get<ResponseDTO<Array<EsHealth>>>(url)
  }

  clusterStats(): any {
    const url = `${environment.apiUrl}/elasticsearch/cluster-stats`;
    return this.http.get<any>(url)
  }

  indices(): Observable<ResponseDTO<any>> {
    const url = `${environment.apiUrl}/elasticsearch/indices`;
    return this.http.get<ResponseDTO<any>>(url)
  }

  mappings(): Observable<ResponseDTO<Array<MappingsDTO>>> {
    const url = `${environment.apiUrl}/elasticsearch/mappings`;
    return this.http.get<ResponseDTO<Array<MappingsDTO>>>(url)
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
    // this.messageService.add(`HeroService: ${message}`);
  }
}
