import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {watchList} from "../data/mock-content";
import {Watch} from "../Shared/Modules/watch";

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  private watchList: Watch[] = watchList;

  constructor() { }
  getwatch(): Observable<Watch[]> {
    return of(this.watchList);
  }
}
