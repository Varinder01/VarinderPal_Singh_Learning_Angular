import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-watch-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    TitleCasePipe
  ],
  templateUrl: './watch-list-item.component.html',
  styleUrl: './watch-list-item.component.css'
})
export class WatchListItemComponent {
  @Input() Watch: any;
  src: string | undefined;


}
