import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyServiceService implements PreloadingStrategy {

  preload(route: import("@angular/router").Route, fn: () => Observable<any>): Observable<any> {
    console.log("PreloadingStrategy")
    if (route.data && route.data['preload']) {
      return fn()
    } else {
      return of(null)
    }
    throw new Error("Method not implemented.");
  }
  constructor() { }
}
