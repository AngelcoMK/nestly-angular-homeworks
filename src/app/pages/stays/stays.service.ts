import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Stay } from '../../models/stay.model';

@Injectable({
  providedIn: 'root'
})
export class StaysService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/stays';

  getStays(): Observable<Stay[]> {
    return this.http.get<Stay[]>(this.apiUrl);
  }

  getSuperhostStays(): Observable<Stay[]> {
    return this.http.get<Stay[]>(this.apiUrl, {
      params: {
        superhost: true
      }
    });
  }
}