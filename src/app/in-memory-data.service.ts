import { Injectable } from '@angular/core';
import { Watch } from './Shared/Modules/watch';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const watches: Watch[] = [
      { id: 1, company: "Rolex", region: "Switzerland", color: "Black", type: "Chronograph", available: true, imgSrc: "photos/img.png" },
      { id: 2, company: "Omega", region: "Switzerland", color: "Blue", type: "Diver", available: false, imgSrc: "photos/img_1.png" },
      { id: 3, company: "Tag Heuer", region: "Switzerland", color: "Red", type: "Sport", available: true, imgSrc: "photos/img_2.png" },
      { id: 4, company: "Audemars Piguet", region: "Switzerland", color: "Gold", type: "Luxury", available: false, imgSrc: "photos/img_3.png" }
    ];
    return { watches };
  }
}
