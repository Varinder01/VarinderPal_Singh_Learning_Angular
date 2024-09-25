import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Watch } from "./Shared/Modules/watch";
import { CommonModule} from "@angular/common";
import {WatchListComponent} from "./watch-list/watch-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WatchListComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Top Watches';

  // Can declare values either way

}

