import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VarinderPal-Singh-Learning-Angular';
  aboutme = 'I am Computer programming student and I am in Third semester';
  heading = 'VarinderPalSingh';
}
