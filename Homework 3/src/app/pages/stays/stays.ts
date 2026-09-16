import { Component, inject, signal } from '@angular/core';

import { StayCardComponent } from '../../components/stay-card/stay-card';
import { StaysService } from './stays.service';
import { Stay } from '../../models/stay.model';

@Component({
  selector: 'app-stays',
  imports: [StayCardComponent],
  templateUrl: './stays.html',
  styleUrl: './stays.css'
})
export class Stays {
  private staysService = inject(StaysService);

  stays: Stay[] = [];

  loading = signal(false);
  error = signal('');

  favoriteIds = signal<number[]>([]);

  ngOnInit(): void {
    this.loadStays();
  }

  loadStays(): void {
    this.loading.set(true);
    this.error.set('');

    this.staysService.getStays().subscribe({
      next: (data) => {
        this.stays = data;
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading stays:', error);
        this.error.set('Unable to load stays. Please try again.');
        this.loading.set(false);
      }
    });
  }

  loadSuperhostStays(): void {
    this.loading.set(true);
    this.error.set('');

    this.staysService.getSuperhostStays().subscribe({
      next: (data) => {
        this.stays = data;
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading superhost stays:', error);
        this.error.set('Unable to load superhost stays. Please try again.');
        this.loading.set(false);
      }
    });
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