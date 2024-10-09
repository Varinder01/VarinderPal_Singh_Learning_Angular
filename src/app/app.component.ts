import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Watch } from "./Shared/Modules/watch";
import { CommonModule} from "@angular/common";
import {WatchListComponent} from "./watch-list/watch-list.component";
import {WatchListItemComponent} from "./watch-list-item/watch-list-item.component";
import {WatchService} from "./service/watch.service";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WatchListComponent, WatchListItemComponent,RouterLinkActive,RouterLink],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Top Watches';
  selectedWatch?: Watch;

  constructor(private watchService: WatchService) {}
  // Can declare values either way
  ngOnInit(): void {
    this.getWatchById(3);
  }

  getWatchById(id: number): void {
    this.watchService.getWatchById(id).subscribe(watch => {
      this.selectedWatch = watch;
    });
  }
}

