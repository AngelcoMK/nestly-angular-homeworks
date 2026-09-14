import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Stay } from '../../models/stay.model';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { BadgeComponent } from '../badge/badge';
import { HighlightCardDirective } from '../../directives/highlight-card';

@Component({
  selector: 'app-stay-card',
  imports: [
    TruncatePipe,
    BadgeComponent,
    HighlightCardDirective,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './stay-card.html',
  styleUrl: './stay-card.css'
})
export class StayCardComponent {
  stay = input.required<Stay>();

  isFavorite = input(false);

  favorite = output<number>();

  onFavorite(): void {
    this.favorite.emit(this.stay().id);
  }
}