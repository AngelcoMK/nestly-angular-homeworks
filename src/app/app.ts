import { Component, signal } from '@angular/core';
import { StayCardComponent } from './components/stay-card/stay-card';
import { stays } from './models/stays';

@Component({
  selector: 'app-root',
  imports: [StayCardComponent],
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