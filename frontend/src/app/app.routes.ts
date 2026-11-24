
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { World } from './pages/world/world';
import { Roleplay } from './pages/roleplay/roleplay';
import { Community } from './pages/community/community';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home, title: 'Home | Asuradon' },
  { path: 'about', component: About, title: 'About | Asuradon' },
  { path: 'world', component: World, title: 'World | Asuradon' },
  { path: 'roleplay', component: Roleplay, title: 'Roleplay | Asuradon' },
  { path: 'community', component: Community, title: 'Community | Asuradon' },
  { path: 'gallery', component: Gallery, title: 'Gallery | Asuradon' },

  { path: '**', redirectTo: 'home' }
];
