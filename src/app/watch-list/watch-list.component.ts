import { Component } from '@angular/core';
import {Watch} from "../Shared/Modules/watch";
import {WatchListItemComponent} from "../watch-list-item/watch-list-item.component";
import {NgForOf} from "@angular/common";
import {WatchService} from "../service/watch.service";

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
  watch: Watch[] = [];
  constructor(private WatchService: WatchService) {}


  selectedWatch?: Watch;
  //function to set which student to display
  selectWatch(watch: Watch): void {
    this.selectedWatch = watch;

}
}
