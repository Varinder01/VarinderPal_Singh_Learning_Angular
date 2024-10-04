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
  getWatches(): Observable<Watch[]> {
    return of(this.watchList);
  }
  getWatchById(id: number): Observable<Watch | undefined> {
    const watch = this.watchList.find(watch => watch.id === id);
    return of(watch);
  }

  addWatch(newWatch: Watch): Observable<Watch[]> {
    this.watchList.push(newWatch);
    return of(this.watchList);
  }

  updateWatch(updatedWatch: Watch): Observable<Watch[]> {
    const index = this.watchList.findIndex(watch => watch.id === updatedWatch.id);
    if (index !== -1) {
      this.watchList[index] = updatedWatch;
    }
    return of(this.watchList);
  }

  removeWatchById(id: number): Observable<Watch | undefined> {
    const index = this.watchList.findIndex(watch => watch.id === id);
    let removedWatch: Watch | undefined;
    if (index !== -1) {
      removedWatch = this.watchList.splice(index, 1)[0];
    }
    return of(removedWatch);
  }
}
