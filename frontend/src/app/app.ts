
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  readonly router = inject(Router);

  
  // The visitor begins at the age gate.
  screen: 'gate' | 'home' | 'blocked' = 'gate';

  // YES button
  enterWebsite() {
    this.screen = 'home';
  }

  // NO button
  denyAccess() {
    this.screen = 'blocked';
  }

  // Return to the age gate for testing
  returnToGate() {
    this.screen = 'gate';
  }

}
