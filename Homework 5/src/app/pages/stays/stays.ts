import { Component, inject, signal } from '@angular/core';

import { StayCardComponent } from '../../components/stay-card/stay-card';
import { StaysStore } from '../../store/stays.store';

@Component({
  selector: 'app-stays',
  imports: [StayCardComponent],
  templateUrl: './stays.html',
  styleUrl: './stays.css'
})
export class Stays {
  store = inject(StaysStore);

  favoriteIds = signal<number[]>([]);

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.store.setSearch(input.value);
  }

  toggleSuperhostOnly(): void {
    this.store.toggleSuperhostOnly();
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
}