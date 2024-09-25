import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-watch-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './watch-list-item.component.html',
  styleUrl: './watch-list-item.component.css'
})
export class WatchListItemComponent {
  @Input() Watch: any;

}
