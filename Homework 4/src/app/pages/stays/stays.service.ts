import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Stay } from '../../models/stay.model';

export interface CreateStayRequest {
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  image: string;
  superhost: boolean;
  description: string;
}

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

  getStay(id: number): Observable<Stay> {
    return this.http.get<Stay>(`${this.apiUrl}/${id}`);
  }

  createStay(stay: CreateStayRequest): Observable<Stay> {
    return this.http.post<Stay>(this.apiUrl, stay);
  }
}