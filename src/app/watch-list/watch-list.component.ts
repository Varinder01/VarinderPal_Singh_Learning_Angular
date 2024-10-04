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
  watches: Watch[] = [];
  constructor(private WatchService: WatchService) {}

  ngOnInit(): void {
    this.getWatches();
  }

  getWatches(): void {
    this.WatchService.getWatches().subscribe(
      (data: Watch[]) => {
        this.watches = data;
      }
      );
  }



  selectedWatch?: Watch;

  selectWatch(watch: Watch): void {
    this.selectedWatch = watch;

}
}
