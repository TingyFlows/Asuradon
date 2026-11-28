
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  categories = [
    'All',
    'Characters',
    'Scenery',
    'Buildings',
    'Roleplay',
    'Events'
  ];

  selectedCategory = 'All';

  screenshots = [
    {
      title: 'Dark Wuxia Manor',
      category: 'Scenery',
      image: 'images/asuradon-manor-home.webp'
    },
    {
      title: 'Character Portraits',
      category: 'Characters',
      image: ''
    },
    {
      title: 'Player Settlements',
      category: 'Buildings',
      image: ''
    },
    {
      title: 'Roleplay Stories',
      category: 'Roleplay',
      image: ''
    },
    {
      title: 'Community Events',
      category: 'Events',
      image: ''
    }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredScreenshots() {
    if (this.selectedCategory === 'All') {
      return this.screenshots;
    }

    return this.screenshots.filter(
      screenshot =>
        screenshot.category === this.selectedCategory
    );
  }
}
