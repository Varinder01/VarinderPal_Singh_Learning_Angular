import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Watch } from '../Shared/Modules/watch';


@Injectable({
  providedIn: 'root'
})
export class WatchService {
  private apiUrl = `api/watches`;

  constructor(private http: HttpClient) {}

  // Get all watches
  getWatches(): Observable<Watch[]> {
    return this.http.get<Watch[]>(this.apiUrl);
  }

  // Get a single watch by ID
  getWatchById(id: number): Observable<Watch | undefined> {
    return this.http.get<Watch>(`${this.apiUrl}/${id}`);
  }

  // Add a new watch
  addWatch(newWatch: Watch): Observable<Watch> {
    return this.http.post<Watch>(this.apiUrl, newWatch);
  }

  // Update an existing watch
  updateWatch(updatedWatch: Watch): Observable<Watch> {
    return this.http.put<Watch>(`${this.apiUrl}/${updatedWatch.id}`, updatedWatch);
  }

  // Remove a watch by ID
  removeWatchById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
