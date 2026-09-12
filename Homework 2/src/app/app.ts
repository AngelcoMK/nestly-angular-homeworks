import { Component, signal } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { stays } from './models/stays';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  stays = stays;

  favoriteIds = signal<number[]>([]);

  showSuperhostOnly = signal(false);

  get filteredStays() {
    if (!this.showSuperhostOnly()) {
      return this.stays;
    }

    return this.stays.filter(stay => stay.superhost);
  }

  onFavorite(stayId: number): void {
    const currentFavorites = this.favoriteIds();

    if (currentFavorites.includes(stayId)) {
      this.favoriteIds.set(
        currentFavorites.filter(id => id !== stayId)
      );
    } else {
      this.favoriteIds.set([
        ...currentFavorites,
        stayId
      ]);
    }
  }

  toggleSuperhostFilter(): void {
    this.showSuperhostOnly.update(value => !value);
  }
}