import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cocktail } from './cocktail';
import { COCKTAILS } from './mock-cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
