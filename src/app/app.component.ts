import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Watch } from "./Shared/Modules/watch";
import { CommonModule} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Top Watches';

  // Can declare values either way
  watchList: Watch[] = // 'any[]' would have worked as well
    [
      { id: 1, company: "Rolex", region: "Switzerland", color: "Black", type: "Chronograph", available: true },
      { id: 2, company: "Omega", region: "Switzerland", color: "Blue", type: "Diver", available: false },
      { id: 3, company: "Tag Heuer", region: "Switzerland", color: "Red", type: "Sport", available: true },
      { id: 4, company: "Patek Philippe", region: "Switzerland", color: "Silver", type: "Dress", available: true },
      { id: 5, company: "Audemars Piguet", region: "Switzerland", color: "Gold", type: "Luxury", available: false }
    ]
}

