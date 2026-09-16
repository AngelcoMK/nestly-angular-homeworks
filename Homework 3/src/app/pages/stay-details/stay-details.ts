import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { StaysService } from '../stays/stays.service';
import { Stay } from '../../models/stay.model';

@Component({
  selector: 'app-stay-details',
  imports: [CurrencyPipe],
  templateUrl: './stay-details.html',
  styleUrl: './stay-details.css'
})
export class StayDetails {
  private route = inject(ActivatedRoute);
  private staysService = inject(StaysService);

  stay: Stay | null = null;

  loading = signal(false);
  error = signal('');
  notFound = signal(false);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.loading.set(true);
    this.error.set('');
    this.notFound.set(false);

    this.staysService.getStay(id).subscribe({
      next: (data) => {
        this.stay = data;
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error loading stay:', error);

        this.stay = null;
        this.loading.set(false);

        if (error.status === 404) {
          this.notFound.set(true);
        } else {
          this.error.set(
            'Unable to load this stay. Please try again later.'
          );
        }
      }
    });
  }
}