import { Component } from '@angular/core';
import { StayCardComponent } from '../../components/stay-card/stay-card';
import { stays } from '../../models/stays';

@Component({
  selector: 'app-stays',
  imports: [StayCardComponent],
  templateUrl: './stays.html',
  styleUrl: './stays.css'
})
export class Stays {
  stays = stays;
}