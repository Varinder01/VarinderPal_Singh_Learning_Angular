import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-watch-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './watch-list-item.component.html',
  styleUrl: './watch-list-item.component.css'
})
export class WatchListItemComponent {
  @Input() Watch: any;
  src: string | undefined;


}
