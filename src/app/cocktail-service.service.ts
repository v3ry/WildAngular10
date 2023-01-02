import { Injectable, Inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cocktail } from './cocktail';
import { COCKTAILS } from './mock-cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor() {}

  getCocktails(): Observable<Cocktail[]> {
    const heroes = of(COCKTAILS);
    console.log(heroes);
    return heroes;
  }

  // public getCocktails(): Array<CocktailServiceService> {
  //   // const cocktail1 = new CocktailServiceService('Titi', 1, 'blabla');
  //   // const cocktail2 = new CocktailServiceService('Titi', 1, 'blabla');
  //   // const cocktail3 = new CocktailServiceService('Titi', 1, 'blabla');
  //   const list = [];
  //   // list.push(cocktail1);
  //   // list.push(cocktail2);
  //   // list.push(cocktail3);
  //   return list;
}
