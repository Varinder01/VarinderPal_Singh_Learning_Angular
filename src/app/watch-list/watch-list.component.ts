import { Component } from '@angular/core';
import {Watch} from "../Shared/Modules/watch";
import {WatchListItemComponent} from "../watch-list-item/watch-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    WatchListItemComponent,
    NgForOf
  ],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {

  watchList: Watch[] = // 'any[]' would have worked as well
    [
      { id: 1, company: "Rolex", region: "Switzerland", color: "Black", type: "Chronograph", available: true },
      { id: 2, company: "Omega", region: "Switzerland", color: "Blue", type: "Diver", available: false },
      { id: 3, company: "Tag Heuer", region: "Switzerland", color: "Red", type: "Sport", available: true },
      { id: 4, company: "Audemars Piguet", region: "Switzerland", color: "Gold", type: "Luxury", available: false }
    ]

  selectedWatch?: Watch;
  //function to set which student to display
  selectWatch(Watch: Watch): void {
    this.selectedWatch = Watch;

}
}
