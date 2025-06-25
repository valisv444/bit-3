import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}


  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/anime/530/characters`);
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters/${id}/full`);
  }
}
