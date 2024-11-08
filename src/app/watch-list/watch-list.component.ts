import { Component, OnInit } from '@angular/core';
import { Watch } from "../Shared/Modules/watch";
import { WatchListItemComponent } from "../watch-list-item/watch-list-item.component";
import { NgForOf } from "@angular/common";
import { WatchService } from "../service/watch.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [
    WatchListItemComponent,
    NgForOf
  ],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watches: Watch[] = [];
  selectedWatch?: Watch;

  constructor(
    private watchService: WatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWatches();
  }

  // Get all watches from the service
  getWatches(): void {
    this.watchService.getWatches().subscribe(
      (data: Watch[]) => {
        this.watches = data;
      }
    );
  }

  // Navigate to modify component with selected watch's ID
  editWatch(watch: Watch): void {
    this.router.navigate(['/modify-list-item'], { queryParams: { id: watch.id } });
  }

  // Delete a watch using the service
  deleteWatch(id: number): void {
    this.watchService.removeWatchById(id).subscribe(() => {
      // After deleting, refresh the watch list
      this.getWatches();
    });
  }
}
