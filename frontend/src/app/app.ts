
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

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
