import { Component, inject, signal } from '@angular/core';

import { Stay } from '../../models/stay.model';
import { StaysService } from '../stays/stays.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  private staysService = inject(StaysService);

  stays = signal<Stay[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.loadStays();
  }

  loadStays(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.staysService.getStays().subscribe({
      next: (stays) => {
        this.stays.set(stays);
        this.isLoading.set(false);
      },

      error: () => {
        this.error.set('Could not load stays.');
        this.isLoading.set(false);
      }
    });
  }

  deleteStay(id: number): void {
    this.staysService.deleteStay(id).subscribe({
      next: () => {
        this.stays.update((stays) =>
          stays.filter((stay) => stay.id !== id)
        );
      },

      error: () => {
        this.error.set('Could not delete stay.');
      }
    });
  }
}