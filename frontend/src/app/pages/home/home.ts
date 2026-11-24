
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Keep your existing Discord invitation URL here.
  discordInvite = 'https://discord.gg/mXWc2ebrTN';
}
