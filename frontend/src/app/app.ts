import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
 screen: 'gate' | 'home' | 'blocked' = 'gate';

 enterWebsite() {
   this.screen = 'home';
 }

 denyAccess() {
   this.screen = 'blocked';
 }  

 returnToGate() {
   this.screen = 'gate';
 }  
}
