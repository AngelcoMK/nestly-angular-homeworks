import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { stays } from '../../models/stays';

@Component({
  selector: 'app-stay-details',
  imports: [CurrencyPipe],
  templateUrl: './stay-details.html',
  styleUrl: './stay-details.css'
})
export class StayDetails {
  private route = inject(ActivatedRoute);

  stays = stays;

  get stay() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.stays.find(stay => stay.id === id);
  }
}